import { Flex } from "@chakra-ui/layout";

export const DefaultLayout: React.FC = ({ children }) => (
  <Flex w="full" minH="100vh" alignItems="center" justifyContent="center">
    {children}
  </Flex>
);
