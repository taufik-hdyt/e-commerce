import { useAuth } from '@/hooks/useAuth';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react';
import { title } from 'process';

interface IProps {
  isOpen: boolean;
  onCLose: () => void;
  title?: string;
}
const ModalEdit: React.FC<IProps> = ({ isOpen, onCLose, title }) => {
  const { user } = useAuth();
  return (
    <Modal isCentered isOpen={isOpen} onClose={onCLose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input size="lg" variant="outline" bg="white" value={user?.name} />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input size="lg" variant="outline" bg="white" value={user?.email} />
          </FormControl>
          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input
              size="lg"
              variant="outline"
              bg="white"
              value={user?.phone_number}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button size="lg" color="white" bg="primary" w="full" rounded="full">
            Edit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalEdit;
