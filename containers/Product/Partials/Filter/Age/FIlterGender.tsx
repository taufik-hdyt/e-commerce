import Drawer from '@/components/Drawer/Drawer';
import { Box } from '@chakra-ui/react';

interface IProps {
  openFilterGender: boolean;
  onClose: () => void;
}
const FilterGender: React.FC<IProps> = ({
  onClose,
  openFilterGender,
}): JSX.Element => {
  return (
    <Drawer title="Filter Gender" isOpen={openFilterGender} onClose={onClose}>
      <Box>Belum ada </Box>
    </Drawer>
  );
};

export default FilterGender;
