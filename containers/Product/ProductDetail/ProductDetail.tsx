import Icon from "@/components/Icon";
import { add, bottomArrow, heart, mines } from "@/statics";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  IconButton,
  Image,
  Stack,
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
    <Box pb="150px">
      <Box>
        <Box pos="relative">
          <Image src="/example.jpg" alt="Product" />
          <HStack pos="absolute" spacing="auto" top={4} px={6} w="full">
            <BackButton link="/" />

            <IconButton
              variant="solid"
              bg="white"
              rounded="full"
              size="lg"
              aria-label="wishlist"
              icon={<Icon name={heart} isStroke size={20} />}
            />
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

      <Box bg="white" w="full" h={70} left={0} pos="fixed" bottom={0}>
        <Center h="full">
          <HStack
            w="34vw"
            bg="#9747FF"
            spacing="auto"
            color="white"
            rounded="full"
            px={6}
            py={"1.5"}
          >
            <Box fontWeight="bold">Rp14800</Box>
            <Button variant="unstyled">Add to Bag</Button>
          </HStack>
        </Center>
      </Box>
    </Box>
  );
};

export default memo(ProductDetail);
