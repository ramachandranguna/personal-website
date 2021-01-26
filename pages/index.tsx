import { BaseLayout } from "components/templates";

import { Flex, Text } from "components/atoms";
import Link from "next/link";

const IndexPage = (props: any) => {
  return (
    <BaseLayout>
      <Flex
        justifyContent="center"
        flexDirection="column"
        alignItems="left"
        width="100%"
        height="85vh"
      >
        <Text as="p" fontSize="p1" mb="0px" color="secondary">
          Hello 👋, Good Evening. My name is
        </Text>
        <Text
          as="h1"
          fontSize="86px"
          fontWeight="900"
          m="0px"
          lineHeight="90px"
          color="primary"
        >
          Ramachandran <br /> Gunasekaran
        </Text>
        <Text as="p" fontSize="p2" color="ternary" lineHeight="h3">
          Core Architect and Technical Solution @{" "}
          <Link href="https://wekan.company" passHref>
            <a
              target="_blank"
              style={{
                color: props.theme.colors.highlight,
                fontWeight: props.theme.fontWeights.semibold,
              }}
            >
              WeKan Company.
            </a>
          </Link>
          <br />
          Ex-Founding Team @{" "}
          <Link href="https://teliver.io" passHref>
            <a
              target="_blank"
              style={{
                color: props.theme.colors.highlight,
                fontWeight: props.theme.fontWeights.semibold,
              }}
            >
              Teliver.
            </a>
          </Link>
        </Text>
        <Text as="h3" fontSize="h4" color="secondary">
          Optimistic & Enthusiastic Software Engineer based out of Chennai 🏡.
        </Text>
        <Text
          as="p"
          fontSize="p1"
          color="ternary"
          maxWidth="60%"
          lineHeight="h3"
        >
          With Bachelors in Information Technology specializing in building
          exceptional, high-quality websites and applications.
        </Text>
      </Flex>
    </BaseLayout>
  );
};

export default IndexPage;
