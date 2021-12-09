import React, { forwardRef, useCallback } from "react";
import { useRouter } from "next/router";
import { Flex } from "@chakra-ui/layout";
import { IconButton } from "@chakra-ui/button";
import { chakra } from "@chakra-ui/system";
import { AiOutlineBackward } from "react-icons/ai";
import type { FlexProps } from "@chakra-ui/layout";

interface Props extends FlexProps {
  backward?: boolean;
}

export const DefaultLayout = forwardRef<HTMLDivElement, Props>(
  ({ children, backward, ...rest }, ref) => {
    const { back } = useRouter();
    const handleBackwardClick = useCallback(() => back(), [back]);

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
        position="relative"
      >
        {backward && (
          <chakra.span position="absolute" top="5" left="5">
            <IconButton
              aria-label="backward"
              variant="link"
              onClick={handleBackwardClick}
              icon={<AiOutlineBackward size="50" />}
            />
          </chakra.span>
        )}
        {children}
      </Flex>
    );
  }
);

DefaultLayout.displayName = "DefaultLayout";
