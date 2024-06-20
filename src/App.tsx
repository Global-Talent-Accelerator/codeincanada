import "@mantine/core/styles.css";
import {
  AppShell,
  AspectRatio,
  BackgroundImage,
  Blockquote,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Image,
  MantineProvider,
  Overlay,
  Paper,
  Text,
  Title,
} from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import React from "react";
import { theme } from "./theme";

export const App = () => {
  const { scrollIntoView: scrollToAbout, targetRef: aboutRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
    });
  const { scrollIntoView: scrollToProcess, targetRef: processRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
    });
  const { scrollIntoView: scrollToBenefits, targetRef: benefitsRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
    });
  const { scrollIntoView: scrollToContact, targetRef: contactRef } =
    useScrollIntoView<HTMLDivElement>({
      offset: 60,
    });
  return (
    <MantineProvider theme={theme}>
      <AppShell header={{ height: 60 }} padding="md">
        <AppShell.Header style={{ zIndex: 1100 }}>
          <Flex mx={100} justify={"space-between"} ref={aboutRef}>
            <Flex pt={7}>
              <img src="/logo.png" alt="logo" />
            </Flex>
            <Flex align={"center"} justify={"center"} gap={"sm"}>
              <Button
                w={100}
                mt={12}
                style={{ borderRadius: 30, backgroundColor: "#fa5252" }}
                onClick={() => scrollToAbout()}
              >
                About
              </Button>
              <Button
                w={100}
                mt={12}
                style={{ borderRadius: 30, backgroundColor: "#fa5252" }}
                onClick={() => scrollToProcess()}
              >
                Process
              </Button>
              <Button
                w={100}
                mt={12}
                style={{ borderRadius: 30, backgroundColor: "#fa5252" }}
                onClick={() => scrollToBenefits()}
              >
                Benefits
              </Button>
              <Button
                w={100}
                mt={12}
                style={{ borderRadius: 30, backgroundColor: "#fa5252" }}
                onClick={() => scrollToContact()}
              >
                Contact
              </Button>
            </Flex>
          </Flex>
        </AppShell.Header>
        <AppShell.Main pb={100}>
          <AspectRatio ratio={16 / 9} maw={1200} mx="auto" pos="relative">
            <BackgroundImage src="/background3.jpg" radius="sm">
              <Flex pt={150} pl={250} direction={"column"}>
                <Title
                  order={1}
                  style={{
                    zIndex: 1000,
                    textTransform: "uppercase",
                    color: "#fa5252",
                  }}
                >
                  Code In Canada
                </Title>
                <Title
                  mt={40}
                  c="white"
                  order={2}
                  style={{ zIndex: 1000 }}
                  maw={400}
                >
                  Don’t lose your valuable tech talent due to US immigration
                  issues
                </Title>
              </Flex>
            </BackgroundImage>
            <Overlay color="#000" backgroundOpacity={0.6} />
          </AspectRatio>
          <Divider mt={40} />
          <Flex px={200} pt={60} pb={40}>
            <Center mx="auto">
              <Box w="100%">
                <Title
                  order={3}
                  textWrap="stable"
                  style={{ textAlign: "center" }}
                >
                  Code in Canada helps companies relocate highly skilled tech
                  employees who are at risk of losing their US by enabling them
                  to work near shore, in Canada for their US company.
                </Title>
              </Box>
            </Center>
          </Flex>
          <Flex maw={800} mx={"auto"}>
            <Title
              mt={60}
              maw={350}
              size="1.75em"
              style={{ textJustify: "auto" }}
              pr={20}
            >
              We understand how hard it is to find and retain high-quality tech
              talent.
            </Title>
            <Blockquote color="#fa5252" mt="xl" style={{ fontSize: "1.5em" }}>
              We solve these challenges through expert cross-border employment
              solutions, leveraging our experience in sales, operations, HR, and
              more.
            </Blockquote>
          </Flex>
          <Divider mt={40} />
          <Center pt={60}>
            <Flex direction={"column"} style={{ textAlign: "center" }}>
              <Title
                order={5}
                c="#fa5252"
                style={{ textTransform: "uppercase" }}
                ref={processRef}
              >
                Our Process
              </Title>
              <Title order={1}>Fast & Easy</Title>
              <Text mt={10} c="#808080">
                Within One Month*
              </Text>
              <Flex maw={1200} pt={30} pb={40} gap="md">
                <Paper p="xl" shadow="xl" radius="xl" maw={300}>
                  <Flex mt={20} justify="space-between">
                    <Box>
                      <Title order={3} mb={10}>
                        1. Hire
                      </Title>
                      <Text c="#808080">
                        We hire the Candidate. The Candidate is contracted to
                        you.
                      </Text>
                    </Box>
                  </Flex>
                </Paper>
                <Paper p="xl" shadow="xl" radius="xl" maw={300}>
                  <Flex mt={20} justify="space-between">
                    <Box>
                      <Title order={3} mb={10}>
                        2. Move
                      </Title>
                      <Text c="#808080">We take care of everything.</Text>
                    </Box>
                  </Flex>
                </Paper>
                <Paper p="xl" shadow="xl" radius="xl" maw={300}>
                  <Flex mt={20} justify="space-between">
                    <Box>
                      <Title order={3} mb={10}>
                        3. Work
                      </Title>
                      <Text c="#808080">
                        The Candidate works from Canada, Visits when needed.
                      </Text>
                    </Box>
                  </Flex>
                </Paper>
              </Flex>
            </Flex>
          </Center>
          <Divider mt={40} />
          <Flex mx={"auto"} mt={60} mb={40} justify={"space-between"} w={1200}>
            <Flex>
              <Center mx="auto" maw={500}>
                <Box w="100%">
                  <Title
                    order={5}
                    textWrap="stable"
                    style={{ textTransform: "uppercase" }}
                    c="#fa5252"
                    ref={benefitsRef}
                  >
                    Benefits
                  </Title>
                  <Text c="#808080" mt={20}>
                    Our solution gives you and your client peace of mind. You
                    focus on growing the business in the US. We take care of
                    your talent working “near-shore” in Canada.
                  </Text>
                  <Divider mt={20} />
                  <Flex direction={"column"}>
                    <Flex mt={20}>
                      <Title order={3} mr={10} c="#fa5252">
                        1.
                      </Title>
                      <Text size="lg" mt={3}>
                        Visit Client
                      </Text>
                    </Flex>
                    <Text c="#808080" ml={40}>
                      - Direct flights within 3 hours
                    </Text>
                    <Text c="#808080" ml={40}>
                      - Same time zone
                    </Text>
                  </Flex>
                  <Flex direction={"column"}>
                    <Flex mt={20}>
                      <Title order={3} mr={10} c="#fa5252">
                        2.
                      </Title>
                      <Text size="lg" mt={3}>
                        Margin
                      </Text>
                    </Flex>
                    <Text c="#808080" ml={40}>
                      - Costs lower in Canada and currency
                    </Text>
                    <Text c="#808080" ml={40}>
                      - Still earning US $ from client
                    </Text>
                  </Flex>
                  <Flex direction={"column"}>
                    <Flex mt={20}>
                      <Title order={3} mr={10} c="#fa5252">
                        3.
                      </Title>
                      <Text size="lg" mt={3}>
                        Continuity
                      </Text>
                    </Flex>
                    <Text c="#808080" ml={40}>
                      - Client sees no difference
                    </Text>
                    <Text c="#808080" ml={40}>
                      - You Focus on growing US business
                    </Text>
                  </Flex>
                  <Flex direction={"column"}>
                    <Flex mt={20}>
                      <Title order={3} mr={10} c="#fa5252">
                        4.
                      </Title>
                      <Text size="lg" mt={3}>
                        Bring MORE
                      </Text>
                    </Flex>
                    <Text c="#808080" ml={40}>
                      - Direct from India to Canada to work on US projects.
                    </Text>
                  </Flex>
                </Box>
              </Center>
            </Flex>
            <Paper shadow="xl" radius="xl">
              <Image
                src="/laptop.jpg"
                alt="background"
                h={600}
                style={{ borderRadius: 30 }}
              />
            </Paper>
          </Flex>
          <Flex>
            <Center mx="auto" maw={1200}>
              <Flex direction={"column"} gap="md">
                <Title
                  order={5}
                  c="#fa5252"
                  style={{ textTransform: "uppercase", textAlign: "center" }}
                  ref={contactRef}
                >
                  Contact
                </Title>
                <Center>
                  <Image src="sean.webp" alt="Sean" h={200} w={200} />
                </Center>
                <Title order={3} mt={10} style={{ textAlign: "center" }}>
                  Sean Languedoc
                </Title>
                <Text
                  style={{ textWrap: "balance", textAlign: "center" }}
                  c="#808080"
                >
                  We are an elegant solution for US tech companies dealing with
                  talent at risk from expiring visas (H1-Bs and OPT). We enable
                  them to continue working for you from Canada. We deliver a
                  safe and secure solution that lowers costs, and enables
                  seamless continuity of services to your clients. We also
                  enable new talent to come from other countries to grow your
                  team in Canada. We take care of everything (visa, immigration,
                  office etc.). Let's get in touch.
                </Text>
                <Center>
                  <Button
                    w={200}
                    style={{ borderRadius: 30, backgroundColor: "#fa5252" }}
                    onClick={() => {
                      window.open("mailto:sean@codeincanada.com", "_blank");
                    }}
                  >
                    Contact
                  </Button>
                </Center>
              </Flex>
            </Center>
          </Flex>
        </AppShell.Main>
        <AppShell.Footer>
          <Center px={200} py={10} mx="auto">
            <Box>
              Code in Canada is owned by Canadian Technology Properties Ltd.
            </Box>
          </Center>
        </AppShell.Footer>
      </AppShell>
    </MantineProvider>
  );
};
