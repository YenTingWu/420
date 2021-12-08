import { forwardRef } from "React"
import { Flex } from "@chakra-ui/layout"
import type { FlexProps } from "@chakra-ui/layout"

export const DefaultLayout = forwardRef<HTMLDivElement, FlexProps>(
  ({ children, ...rest }, ref) => (
    <Flex
      as="main"
      w="full"
      minH="100vh"
      alignItems="center"
      justifyContent="center"
      {...rest}
      ref={ref}
    >
      {children}
    </Flex>
  )
)
