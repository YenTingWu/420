import type { NextPage } from "next"
import Link from "next/link"
import { DefaultLayout } from "@components/DefaultLayout"
import { chakra } from "@chakra-ui/system"
import { SimpleGrid, GridItem, Link as CharkraLink } from "@chakra-ui/layout"

const linkConfig = [
  {
    index: "-00",
    name: "Three Intro Cube",
  },
  {
    index: "001",
    name: "Paper",
  },
  {
    index: "002",
    name: "Roll",
  },
  {
    index: "003",
    name: "Grass",
  },
  {
    index: "004",
    name: "Fire",
  },
  {
    index: "005",
    name: "Smoke",
  },
]

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <SimpleGrid
        columns={5}
        maxW="650px"
        w="full"
        // h="500px"
        bgColor="orange.50"
        justifyContent="center"
        alignItems="center"
        p="5"
      >
        {linkConfig.map(({ name, index }) => (
          <GridItem
            justifyContent="center"
            alignItems="center"
            key={`${name}_${index}`}
            h="45px"
          >
            <Link href={`/${index}`} passHref={true}>
              <CharkraLink noOfLines={1}>
                <chakra.span fontWeight="bold" color="gray.400">
                  {index}
                </chakra.span>{" "}
                <chakra.span fontWeight="bold" color="black">
                  {name}
                </chakra.span>
              </CharkraLink>
            </Link>
          </GridItem>
        ))}
      </SimpleGrid>
    </DefaultLayout>
  )
}

export default Home
