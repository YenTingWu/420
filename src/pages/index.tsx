"use client";

import type { NextPage } from "next";
import Link from "next/link";
import { SEO } from "@components/SEO";
import { DefaultLayout } from "@components/DefaultLayout";
import { chakra } from "@chakra-ui/system";
import { SimpleGrid, GridItem, Link as ChakraLink } from "@chakra-ui/layout";

const linkConfig = [
  {
    index: "__1",
    name: "Three Intro Cube",
  },
  {
    index: "__2",
    name: "THREE Intro Line",
  },
  {
    index: "__3",
    name: "Chandelier",
  },
  {
    index: "001",
    name: "Bubble Circle",
  },
];

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <SEO title="Home" />

      <SimpleGrid
        columns={5}
        maxW="800px"
        w="full"
        bgColor="orange.50"
        justifyContent="center"
        alignItems="center"
        p="5"
        templateColumns="repeat(3, minmax(0, 1fr))"
      >
        {linkConfig.map(({ name, index }) => (
          <GridItem
            justifyContent="center"
            alignItems="center"
            key={`${name}_${index}`}
            py="2"
          >
            <ChakraLink display="flex" as={Link} href={`/${index}`}>
              <chakra.span fontWeight="bold" color="gray.400">
                {index}
              </chakra.span>
              <chakra.span ml="3" fontWeight="bold" color="black">
                {name}
              </chakra.span>
            </ChakraLink>
          </GridItem>
        ))}
      </SimpleGrid>
    </DefaultLayout>
  );
};

export default Home;
