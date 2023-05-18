import Drawer from "@/components/Drawer/Drawer";
import Icon from "@/components/Icon/Icon";
import { successOrder } from "@/statics";
import {
  Box,
  Button,
  Center,
  Heading,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { memo, useEffect } from "react";
import { motion } from "framer-motion";

const CheckoutSuccess: React.FC = (): JSX.Element => {
  return (
    <Stack h="100vh" bg="primary" align="stretch" justify="space-between">
      <Center h="auto">
        <Icon name={successOrder} isSimple size={250} />
      </Center>
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Animasi dimulai dari opacity 0 dan posisi y 100 (di bawah)
        animate={{ opacity: 1, y: 0 }} // Animasi berakhir dengan opacity 1 dan posisi y 0 (tampil di layar)
        transition={{ duration: 0.5 }} // Durasi animasi
      >
        <Box py={10} maxW="500px" bg="white" roundedTop="2xl" boxShadow="sm">
          <Heading px={10} mt={6} textAlign="center">
            Order Placed Successfully
          </Heading>

          <Box mt={6} textAlign="center" color=" rgba(5, 5, 5, 0.5);">
            You will recieve an email confirmation
          </Box>
          <Center mt={16}>
            <Stack w="full" px={6}>
              <Button rounded="full" size="lg" color="white" bg="primary">
                <Link href="/orders/a">See Order details</Link>
              </Button>
            </Stack>
          </Center>
        </Box>
      </motion.div>
    </Stack>
  );
};

export default memo(CheckoutSuccess);
