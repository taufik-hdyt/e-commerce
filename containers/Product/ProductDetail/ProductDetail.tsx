import Icon from '@/components/Icon';
import { add, bottomArrow, ceklis, heart, mines } from '@/statics';
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
} from '@chakra-ui/react';
import { memo, useState } from 'react';
import Rating from './Partials/Rating';
import BackButton from '@/components/BackButton';
import Link from 'next/link';
import Drawer from '@/components/Drawer/Drawer';
import NavbarAction from '@/components/NavbarAction';

const ProductDetail: React.FC = (): JSX.Element => {
  const {
    isOpen: isOpenSize,
    onClose: onCloseSize,
    onOpen: onOpenSize,
  } = useDisclosure();

  const {
    isOpen: isOpenColor,
    onClose: onCloseColor,
    onOpen: onOpencolor,
  } = useDisclosure();

  const [qty, setQty] = useState<number>(1);

  const addCart = () => {
    setQty(qty + 1);
  };
  const minesCart = () => {
    setQty(qty - 1);
  };

  return (
    <Box pb="70px" overflowY="auto">
      <Box>
        <Box pos="relative">
          <Image src="/example.jpg" alt="Product" />
          <HStack pos="absolute" spacing="auto" top={4} px={6} w="full">
            <BackButton link="/product" />

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
        <Box px={4} pb={4}>
          <Heading mt={5} as="h2" size="lg">
            Mohair Blouse
          </Heading>
          <Box mt={4} fontSize="lg" fontWeight="bold" color="primary">
            Rp15.000
          </Box>

          <Box mt={10}>
            <Box
              _hover={{ bg: 'primary', color: 'white' }}
              cursor="pointer"
              bg="white"
              rounded="full"
              onClick={onOpenSize}
              p={4}
            >
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

                <GridItem justifySelf="end" alignSelf="center">
                  <Icon isStroke name={bottomArrow} size={20} />
                </GridItem>
              </Grid>
            </Box>
          </Box>

          <Box mt={2}>
            <Box
              _hover={{ bg: 'primary', color: 'white' }}
              cursor="pointer"
              bg="white"
              onClick={onOpencolor}
              rounded="full"
              p={4}
            >
              <Grid gridTemplateColumns="80% 10% 10%">
                <GridItem>
                  <Box fontSize="lg" fontWeight="semibold">
                    Color
                  </Box>
                </GridItem>

                <GridItem justifySelf="center" alignSelf="center">
                  <Box w={5} h={5} bg="red" rounded="full" />
                </GridItem>

                <GridItem justifySelf="end" alignSelf="center">
                  <Icon isStroke name={bottomArrow} size={20} />
                </GridItem>
              </Grid>
            </Box>
          </Box>

          <Box mt={2}>
            <HStack bg="white" rounded="full" px={4} py={2} spacing="auto">
              <Box fontSize="lg" fontWeight="semibold">
                Quantity
              </Box>

              <Flex columnGap={3} align="center">
                <IconButton
                  onClick={minesCart}
                  size="md"
                  bg="primary"
                  rounded="full"
                  aria-label="minesCart"
                  isDisabled={qty === 1}
                >
                  <Icon name={mines} size={20} />
                </IconButton>
                <Box>{qty}</Box>

                <IconButton
                  size="md"
                  bg="primary"
                  rounded="full"
                  aria-label="minesCart"
                  onClick={addCart}
                >
                  <Icon name={add} size={20} />
                </IconButton>
              </Flex>
            </HStack>
          </Box>

          <Box mt={4} color="rgba(5, 5, 5, 0.5);">
            Gucci transcribes its heritage, creativity, and innovation into a
            plenitude of collections. From staple items to distinctive
            accessories, from the everyday wardrobe to special occasions, the
            Houses beloved motifs embellish the latest leathergoods. Here a
            briefcase appears in jumbo GG taupe leather as part of the new
            luggage line.
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
        </Box>
      </Box>

      <NavbarAction>
        <Center h="full">
          <HStack
            bg="primary"
            spacing="auto"
            color="white"
            rounded="full"
            maxW="100vw"
            w="full"
            py={2}
            px={4}
          >
            <Box fontWeight="bold">Rp14800</Box>
            <Button variant="unstyled">
              <Link href="/checkout">Add to Bag</Link>
            </Button>
          </HStack>
        </Center>
      </NavbarAction>

      <Drawer title="Size" isOpen={isOpenSize} onClose={onCloseSize}>
        <Stack>
          <HStack
            _hover={{ bg: 'primary', color: 'white' }}
            bg="#F5F5F5"
            px={6}
            py={4}
            rounded="full"
            spacing="auto"
          >
            <Box fontWeight="bold" fontSize="lg">
              S
            </Box>
            <Icon name={ceklis} isSimple size={20} />
          </HStack>
        </Stack>
      </Drawer>

      <Drawer title="Color" isOpen={isOpenColor} onClose={onCloseColor}>
        <Stack>
          <Flex
            _hover={{ bg: 'primary', color: 'white' }}
            bg="#F5F5F5"
            px={6}
            py={4}
            rounded="full"
            justify="space-between"
            align="center"
          >
            <Box fontWeight="bold" fontSize="lg">
              Red
            </Box>
            <Box
              border="2px solid white"
              ml={72}
              w={5}
              h={5}
              bg="yellow"
              rounded="full"
            />
            <Icon name={ceklis} isSimple size={20} />
          </Flex>
        </Stack>
      </Drawer>
    </Box>
  );
};

export default memo(ProductDetail);
