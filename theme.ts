import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  colors: {
    black: "#333333",
  },
  components: {
    Link: {
      baseStyle: {
        _focus: {
          outline: "none",
          boxShadow: "none",
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
      },
      a: {
        _focus: {
          outline: "none",
          boxShadow: "none",
        },
      },
    },
  },
  fonts: {
    heading: "Cutive Mono",
    body: "Cutive Mono",
  },
})

export default theme
