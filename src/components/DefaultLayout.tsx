import React, { forwardRef } from "react";
import { Flex } from "@chakra-ui/layout";
import type { FlexProps } from "@chakra-ui/layout";

export const DefaultLayout = forwardRef<HTMLDivElement, FlexProps>(
  ({ children, ...rest }, ref) => {
    return (
      <Flex
        as="main"
        w="full"
        flexDirection="column"
        minH="100vh"
        alignItems="center"
        justifyContent="center"
        {...rest}
        ref={ref}
      >
        {children}
      </Flex>
    );
  }
);

DefaultLayout.displayName = "DefaultLayout";
