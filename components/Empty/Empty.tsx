import { Box, Button, Heading, Spacer, Stack, Text } from '@chakra-ui/react';
import { memo } from 'react';
import Icon from '../Icon';
import { notifEmpty } from '@/statics';
import Link from 'next/link';

interface IProps {
  buttonName?: string;
  titleEmpty?: string;
  iconEmpty?: string;
  link?: string;
}
const Empty: React.FC<IProps> = ({
  buttonName,
  iconEmpty,
  titleEmpty,
  link,
}): JSX.Element => {
  return (
    <Stack align="center">
      <Icon name={iconEmpty} isSimple size={120} />
      <Text textAlign="center" fontSize="3xl" fontWeight="bold">
        {titleEmpty}
      </Text>
      <Spacer />
      <Spacer />
      <Link href={`/${link}`}>
        <Button bg="primary" color="white" py={6} px={6} rounded="full">
          {buttonName}
        </Button>
      </Link>
    </Stack>
  );
};

export default memo(Empty);
