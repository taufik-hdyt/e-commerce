import Icon from '@/components/Icon';
import { apple, facebook, google, send } from '@/statics';
import { Box, useToast } from '@chakra-ui/react';
import { memo, useState, FormEvent } from 'react';

import RenderIf from '@/components/RenderIf';
import ResetPassword from './Partials/ResetPassword/ResetPassword';
import axios from 'axios';
import { setCookie } from 'nookies';
import { useRouter } from 'next/router';
import FormLogin from './Partials/Form Login/FormLogin';
import ResetSuccess from './Partials/ResetPassword/ResetSuccess';

const Login: React.FC = (): JSX.Element => {
  const [step, setStep] = useState<number>(1);

  const onNext = () => {
    setStep(step + 1);
  };
  const returnLogin = () => {
    setStep(step - 3);
  };

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();
  const toast = useToast();
  const [loading, setLoading] = useState<boolean>(false);

  const login = (e: FormEvent) => {
    e.preventDefault();
    console.log(login);
    setLoading(true);
    axios
      .post(`/api/users/login`, {
        email: email,
        password,
      })
      .then(function (response) {
        setCookie(null, 'token', response.data.data.token, {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        });
        router.push('/splash');
      })
      .catch(function (error) {
        console.log(error);
        toast({
          position: 'top',
          title: error.response.data.message,
          status: 'error',
          isClosable: true,
          duration: 1000,
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <Box px={4}>
      <form onSubmit={login}>
        <RenderIf isTrue={step === 1}>
          <FormLogin
            loading={loading}
            setPassword={setPassword}
            setEmail={setEmail}
            email={email}
            password={password}
            onContinue={onNext}
          />
        </RenderIf>
      </form>

      <RenderIf isTrue={step === 2}>
        <ResetPassword onContinue={onNext} />
      </RenderIf>

      <RenderIf isTrue={step === 3}>
        <ResetSuccess returnLogin={returnLogin} />
      </RenderIf>
    </Box>
  );
};

export default memo(Login);
