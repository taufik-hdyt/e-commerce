import Icon from "@/components/Icon";
import { add, bottomArrow, heart, mines } from "@/statics";
import {
  Box,
  Center,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { memo } from "react";
import Rating from "./Partials/Rating";
import Modall from "@/components/Modal/Modal";
import BackButton from "@/components/BackButton";

const ProductDetail: React.FC = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box pb={20}>
      <Box>
        <Box pos="relative">
          <Image src="/example.jpg" alt="Product" />
          <HStack pos="absolute" spacing="auto" top={4} px={6} w="full">
            <BackButton link="/" />
            <Box bg="white" p={3.5} rounded="full">
              <Icon name={heart} isSimple size={20} />
            </Box>
          </HStack>
        </Box>
        <Heading mt={5} as="h2" size="lg">
          Mohair Blouse
        </Heading>
        <Box mt={4} fontSize="lg" fontWeight="bold" color="#9747FF">
          Rp15.000
        </Box>
      </Box>

      <Box mt={10}>
        <Box bg="white" rounded="full" p={4}>
          <Grid gridTemplateColumns="80% 10% 10%">
            <GridItem>
              <Box fontSize="lg" fontWeight="semibold">
                Size
              </Box>
            </GridItem>

            <GridItem justifySelf="center">
              <Box fontSize="xl" fontWeight="bold">
                S
              </Box>
            </GridItem>

            <GridItem onClick={onOpen} justifySelf="end" alignSelf="center">
              <Icon isStroke name={bottomArrow} size={20} />
            </GridItem>
          </Grid>
        </Box>
      </Box>

      <Box mt={4}>
        <Box bg="white" rounded="full" p={4}>
          <Grid gridTemplateColumns="80% 10% 10%">
            <GridItem>
              <Box fontSize="lg" fontWeight="semibold">
                Color
              </Box>
            </GridItem>

            <GridItem justifySelf="center">
              <Box w={5} h={5} bg="red" rounded="full" />
            </GridItem>

            <GridItem justifySelf="end" alignSelf="center">
              <Icon isStroke name={bottomArrow} size={20} />
            </GridItem>
          </Grid>
        </Box>
      </Box>

      <Box mt={4}>
        <Box bg="white" rounded="full" px={4} py={2}>
          <Grid gridTemplateColumns="1.8fr 1fr">
            <GridItem alignSelf="center">
              <Box fontSize="lg" fontWeight="semibold">
                Quantity
              </Box>
            </GridItem>

            <GridItem>
              <HStack spacing="auto" px={2}>
                <Box as="button" w={10} h={10} bg="#9747FF" rounded="full">
                  <Center h="full">
                    <Icon name={add} size={20} isSimple />
                  </Center>
                </Box>
                <Box fontSize="lg" rounded="full" fontWeight="bold">
                  1
                </Box>
                <Box as="button" w={10} h={10} bg="#9747FF" rounded="full">
                  <Center h="full">
                    <Icon name={mines} size={14} isSimple />
                  </Center>
                </Box>
              </HStack>
            </GridItem>
          </Grid>
        </Box>
      </Box>

      <Box mt={4} color="rgba(5, 5, 5, 0.5);">
        Gucci transcribes its heritage, creativity, and innovation into a
        plenitude of collections. From staple items to distinctive accessories,
        from the everyday wardrobe to special occasions, the Houses beloved
        motifs embellish the latest leathergoods. Here a briefcase appears in
        jumbo GG taupe leather as part of the new luggage line.
      </Box>

      <Heading mt={4} as="h2" size="sm">
        Shipping & Returns
      </Heading>
      <Text mt={2} color="rgba(5, 5, 5, 0.5);">
        Free standard shipping and free 60-day returns
      </Text>
      <Heading mt={4} as="h2" size="sm">
        Reviews
      </Heading>
      <Heading mt={4} as="h2" size="lg">
        4.5 Ratings
      </Heading>
      <Text color="rgba(5, 5, 5, 0.5);" mt={2}>
        213 Reviews
      </Text>

      <Rating />
      <Rating />

      <Modall isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default memo(ProductDetail);
