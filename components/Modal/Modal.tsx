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
const ModalComponent: React.FC<IProps> = ({ isOpen, onCLose, title }) => {
  const {} = useAuth();
  return (
    <Modal isCentered isOpen={isOpen} onClose={onCLose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input size="lg" variant="outline" bg="white" />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input size="lg" variant="outline" bg="white" />
          </FormControl>
          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input size="lg" variant="outline" bg="white" />
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

ModalComponent.displayName = 'Modal';
export default ModalComponent;
