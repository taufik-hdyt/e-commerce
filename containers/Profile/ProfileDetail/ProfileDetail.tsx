import { Box, Button, HStack, Stack } from '@chakra-ui/react';
import { memo } from 'react';

interface IProps {
  name?: string;
  email?: string;
  contact?: number;
  openEditProfil?: () => void;
}
const ProfileDetail: React.FC<IProps> = ({
  contact,
  email,
  name,
  openEditProfil,
}): JSX.Element => {
  return (
    <Stack spacing={-2} align="start" bg="white" p={4} rounded="lg">
      <Box fontWeight="bold">{name}</Box>
      <HStack spacing="auto" w="full">
        <Box fontWeight="semibold" color="rgba(5, 5, 5, 0.5)">
          {email}
        </Box>
        <Button onClick={openEditProfil} variant="unstyled" color="primary">
          Edit
        </Button>
      </HStack>
      <Box fontWeight="semibold" color="rgba(5, 5, 5, 0.5)">
        {contact}
      </Box>
    </Stack>
  );
};

export default memo(ProfileDetail);
