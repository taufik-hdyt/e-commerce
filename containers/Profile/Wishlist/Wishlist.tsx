import BackButton from "@/components/BackButton";
import Icon from "@/components/Icon/Icon";
import { heart, rightArrow } from "@/statics";
import {
  Box,
  HStack,
  Heading,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { memo } from "react";
import WishlistItem from "./Partials/WishlistItem";

const Wishlist: React.FC = (): JSX.Element => {
  return (
    <Stack minH="95vh" spacing="auto">
      <Box>
        <BackButton link="/profile" />
        <Heading mt={2} fontSize="3xl" fontWeight="bold">
          Wishlist
        </Heading>

        <Stack mt={10}>
          <WishlistItem name="My Favorite" qty={2} />
          <WishlistItem name="T-shirts" qty={2} />
        </Stack>
      </Box>
    </Stack>
  );
};

export default memo(Wishlist);
