// export const IMAGE_LAZY =
//   "data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs=";

import { UseToastOptions } from "@chakra-ui/react";
import styled from "@emotion/styled";

// export const dynamicOptions: { ssr: boolean } = { ssr: false };
// export const dynamicOptionsSsr: { ssr: boolean } = { ssr: false };

// export const keyName = process.env.NEXT_PUBLIC_SECRET_KEY ?? "auth-key-brand";
// export const brandKey = "brand";
// export const employeeKey = "employee";
// export const storageKey = process.env.NEXT_PUBLIC_STORAGE_KEY ?? "root";

export const SocialMediaEmbed = styled.iframe`
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
`;

export const tabStyle = {
  border: "1px solid",
  borderColor: "border",
  py: "1",
  color: "font.pencil",
  fontWeight: "bold",
  fontSize: "sm",
  _selected: {
    borderColor: "font.primary",
    color: "font.primary",
  },
  _hover: {
    borderColor: "font.primary",
    color: "font.primary",
  },
};

export const toastOptions: UseToastOptions = {
  isClosable: true,
  position: "bottom",
  duration: 3000,
  variant: "solid",
};

export const showToast = (
  toast: any,
  message: string,
  status: string,
  title: string = ""
) =>
  toast({
    description: message || "Failed",
    status,
    ...(title ? { title } : {}),
    ...toastOptions,
  });
