import Icon from "@/components/Icon";
import { apple, facebook, google, send } from "@/statics";
import { Box } from "@chakra-ui/react";
import { memo, useState } from "react";

import StepOne from "./StepOne/StepOne";
import RenderIf from "@/components/RenderIf";
import StepTwo from "./StepTwo/StepTwo";
import ResetPassword from "./ResetPassword/ResetPassword";
import Empty from "@/components/Empty/Empty";
import ResetSuccess from "./ResetPassword/ResetSuccess";

const Login: React.FC = (): JSX.Element => {
  const [step, setStep] = useState<number>(1);

  const onNext = () => {
    setStep(step + 1);
  };
  const returnLogin = () => {
    setStep(step - 3);
  };

  return (
    <Box>
      <RenderIf isTrue={step === 1}>
        <StepOne onContinue={onNext} />
      </RenderIf>
      <RenderIf isTrue={step === 2}>
        <StepTwo resetPassword={onNext} />
      </RenderIf>

      <RenderIf isTrue={step === 3}>
        <ResetPassword onContinue={onNext} />
      </RenderIf>

      <RenderIf isTrue={step === 4}>
        <ResetSuccess returnLogin={returnLogin} />
      </RenderIf>
    </Box>
  );
};

export default memo(Login);
