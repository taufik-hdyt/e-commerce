import Drawer from '@/components/Drawer/Drawer';
import { Box } from '@chakra-ui/react';

interface IProps {
  openFilterSortBy: boolean;
  onClose: () => void;
}
const FilterSortBy: React.FC<IProps> = ({
  onClose,
  openFilterSortBy,
}): JSX.Element => {
  return (
    <Drawer title="Filter Sort By" isOpen={openFilterSortBy} onClose={onClose}>
      <Box>Belum ada </Box>
    </Drawer>
  );
};

export default FilterSortBy;
