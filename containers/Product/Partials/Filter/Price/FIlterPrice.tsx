import Drawer from '@/components/Drawer/Drawer';
import { Box } from '@chakra-ui/react';

interface IProps {
  openFilterPrice: boolean;
  onClose: () => void;
}
const FilterPrice: React.FC<IProps> = ({
  onClose,
  openFilterPrice,
}): JSX.Element => {
  return (
    <Drawer title="Filter Price" isOpen={openFilterPrice} onClose={onClose}>
      <Box>Belum ada </Box>
    </Drawer>
  );
};

export default FilterPrice;
