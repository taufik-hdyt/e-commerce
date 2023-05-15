import BackButton from "@/components/BackButton";
import Icon from "@/components/Icon/Icon";
import ItemProduct from "@/components/ItemProduct";
import { heart, rightArrow } from "@/statics";
import { Box, Grid, Heading, Stack, VStack } from "@chakra-ui/react";
import { memo } from "react";

const WishlistProduct: React.FC = (): JSX.Element => {
  return (
    <Stack minH="95vh" pb={10}>
      <Box>
        <Box>
          <BackButton link="/profile" />
          <Heading mt={2} fontSize="3xl" fontWeight="bold">
            MyFavorite (12)
          </Heading>
        </Box>

        <Grid mt={6} gridTemplateColumns="1fr 1fr" gap={4}>
          <ItemProduct image="/example.jpg" name="Kemeja" price={500} />
          <ItemProduct image="/example.jpg" name="Kemeja" price={500} />
          <ItemProduct image="/example.jpg" name="Kemeja" price={500} />
          <ItemProduct image="/example.jpg" name="Kemeja" price={500} />
        </Grid>
      </Box>
    </Stack>
  );
};

export default memo(WishlistProduct);
