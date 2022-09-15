import type { NextPage } from "next";
import Header from "../components/Header";
import Head from "next/head";
import SectionTitle from "../components/SectionTitle";
import {
  Box,
  Text,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Project from "../components/Project";

const Home: NextPage = () => {
  const lang = [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "C#",
    "Java",
    "Python",
    "PHP",
  ];
  const framework = [
    "ReactJS",
    "NextJS",
    "JQuery",
    "TailwindCSS",
    "Bootstrap5",
    "ExpressJS",
    "AdonisJS",
    "Flask",
    "CodeIgniter",
  ];

  const langElem = lang.map((val, idx) => {
    return (
      <Box display="flex" key={idx} alignItems="center" gap="3">
        <Icon
          icon="bxs:right-arrow"
          fontSize="0.5rem"
          color="var(--chakra-colors-yellow-300)"
        />
        <Box fontFamily="mono" color="gray.400">
          {val}
        </Box>
      </Box>
    );
  });

  const frameworkElem = framework.map((val, idx) => {
    return (
      <Box display="flex" key={idx} alignItems="center" gap="3">
        <Icon
          icon="bxs:right-arrow"
          fontSize="0.5rem"
          color="var(--chakra-colors-yellow-300)"
        />
        <Box fontFamily="mono" color="gray.400">
          {val}
        </Box>
      </Box>
    );
  });

  const projectData = [
    {
      image: "/images/first-project.PNG",
      name: "Electronic - Request For Repair",
      description:
        "E-ROR is an application requested by Kementerian Sekretariat Negara (KEMENSETNEG) in collaboration with PT Bank Mandiri. This application is used to report things to be repaired in KEMENSETNEG area which make things",
      type: "Client Project",
      badge: ["nextjs", "react.js", "JavaScript", "CodeIgniter", "PHP"],
      link: "https://erorsetneg.vercel.app",
    },
    {
      image: "/images/second-project.PNG",
      name: "VaksinOnline",
      description:
        "VaksinOnline is a website requested by Kalbis Institute in order to register vaccination by online website.",
      type: "Client Project",
      badge: ["JavaScript", "CodeIgniter", "PHP"],
    },
    {
      image: "/images/third-project.PNG",
      name: "Data Faskes",
      description:
        "Data Faskes is a website requested by PT Bank Mandiri in order to record missing data of workers in each medical facility.",
      type: "Client Project",
      badge: ["Jquery", "JavaScript", "CodeIgniter", "PHP"],
    },
    {
      image: "/images/fourth-project.PNG",
      name: "BoncahFarm",
      description:
        "BoncahFarm is a website requested by PT Boncah Utama in order to record each data about production, income, outcome, etc.",
      type: "Client Project",
      badge: ["nextjs", "react.js", "JavaScript", "NodeJS", "ExpressJS"],
      link: "https://boncahfarm.com",
    },
    {
      image: "/images/fifth-project.PNG",
      name: "CantikGeulis",
      description:
        "CantikGeulis is a website for small e-commerce requested by CantikGeulis.id in order to register the store in instagram shopping and to create a catalog.",
      type: "Client Project",
      badge: ["PHP", "CodeIgniter3", "TailwindCSS", "JavaScript"],
      link: "https://cantikgeulis.id",
    },
    {
      image: "/images/sixth-project.PNG",
      name: "E-Ticketing",
      description:
        "E-Ticketing is a website for bootcamp project at university level to get a certificate.",
      type: "Bootcamp Project",
      badge: ["reactjs", "JavaScript", "Nodejs", "Expressjs"],
      link: "https://himifkalbis.herokuapp.com",
    },
  ];

  const projectElem = projectData.map((val, idx) => {
    const dir =
      idx % 2 === 0
        ? { ...val, direction: "left" }
        : { ...val, direction: "right" };
    return <Project project={{ project: dir }} key={idx} />;
  });

  return (
    <>
      <Head>
        <title>Portfolio | Iqbal Ramadhan</title>
      </Head>
      <Header />
      <Box
        as="main"
        width={["90%", "90%", "80%", "80%", "70%"]}
        mx="auto"
        mt="16"
        id="active"
        transition="0.4s ease-in"
      >
        {/*  Homepage */}
        <Box as="section" px="4" id="hero">
          <Text as="span" fontFamily="mono" color="yellow.300">
            Hi, my name is
          </Text>
          <Text
            as="h1"
            color="gray.200"
            fontSize={["2xl", "4xl", "5xl", "6xl"]}
            fontWeight="bold"
            mt="4"
          >
            Iqbal Ramadhan.
          </Text>
          <Text
            as="h2"
            fontSize={["2xl", "4xl", "5xl", "6xl"]}
            fontWeight="bold"
            color="gray.400"
            mt="1"
          >
            I build things with love and passion.
          </Text>
          <Box w={["100%", "100%", "70%"]}>
            <Text as="p" color="gray.400" mt="5" fontSize="lg">
              I am a fresh graduation computer science student specializing in{" "}
              <Box as="span" color="yellow.300">
                building modern website from back to front
              </Box>
              . Currently searching for job experience and looking forward to
              have an amazing work with you!
            </Text>
          </Box>
          <Box display="flex" gap="4" mt="10">
            <Button colorScheme="yellow" size="lg" fontFamily="mono">
              Contact Me
            </Button>
            <Button
              colorScheme="yellow"
              variant="outline"
              size="lg"
              fontFamily="mono"
            >
              Show More
            </Button>
          </Box>
        </Box>

        {/*  About Me */}
        <Box as="section" py="12" mt="36" id="about">
          <Box
            fontSize="lg"
            display="flex"
            flexDir={["column", "column", "column", "row"]}
            gap="10"
          >
            <Box width={["100%", "100%", "100%", "60%"]}>
              <SectionTitle section={{ number: "01", title: "About Me" }} />
              <Box color="gray.400">
                Hello! My name is Muhammad Iqbal Ramadhan and I enjoy doing
                things on the internet. I grow up with computers that is why i
                choose computer science degree here at Kalbis Institute.
                <br />
                <br />I started doing website related thing when I was on my
                first semester learning basic web like HTML, CSS, and
                JavaScript. My interest grow even more when I was studying about
                PHP and realize I can do a lot more with that!
                <br />
                <br />
                Today I have learnt a lot about web development because I have
                an interesting chance to do{" "}
                <Box as="span" color="yellow.300">
                  an internship at one of the biggest bank in Indonesia
                </Box>
                . I took that chance{" "}
                <Box as="span" color="yellow.300">
                  seriously
                </Box>{" "}
                in order to grow my skill and show up what I can do with all the
                things I have learnt so far.
                <br />
                <br />
                I have learnt a lot and I believe I can learn even more with
                modern things that grow up blazingly fast in website
                development.
                <br />
                <br />
                So, here is the programming language that I have learnt and used
                before. Although,{" "}
                <Box as="span" color="yellow.300">
                  I am not very good at some
                </Box>
                .
                <br />
                <br />
                <Box color="gray.300" fontWeight="bold">
                  Programming Language:
                </Box>
                <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" mt="3">
                  {langElem}
                </Box>
                <Box color="gray.300" fontWeight="bold" mt="4">
                  Framework/Library:
                </Box>
                <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" mt="3">
                  {frameworkElem}
                </Box>
              </Box>
            </Box>
            <Box width={["70%", "70%", "70%", "40%"]} mx="auto" mt="10">
              <Box
                position="relative"
                width="100%"
                height="80"
                background="yellow.300"
                borderRadius="lg"
                role="group"
                _hover={{
                  background: "white",
                }}
              >
                <Image
                  src="/images/me.png"
                  alt="Me"
                  layout="fill"
                  objectFit="fill"
                />
                <Box
                  position="absolute"
                  top="5"
                  left="5"
                  border="2px solid var(--chakra-colors-yellow-300)"
                  borderRadius="lg"
                  width="100%"
                  height="80"
                  opacity="0.5"
                  zIndex="-999"
                  transition="0.2s ease-in"
                  _groupHover={{
                    left: "4",
                    top: "4",
                  }}
                ></Box>
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  background="yellow.300"
                  borderRadius="lg"
                  width="100%"
                  height="80"
                  opacity="0.5"
                  _groupHover={{
                    background: "transparent",
                  }}
                ></Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/*  My Experience */}
        <Box px="4" py="12" mt="12" id="experience">
          <SectionTitle section={{ number: "02", title: "My Experience" }} />
          <Box>
            <Tabs variant="line" colorScheme="yellow">
              <TabList display="grid" gridTemplateColumns="repeat(2, 1fr)">
                <Tab>Bank Mandiri</Tab>
              </TabList>
              <TabPanels>
                <TabPanel color="gray.400">
                  <Box as="span" fontFamily="mono" color="yellow.300">
                    Internship
                  </Box>
                  <Box fontWeight="semibold" fontSize="xl" color="gray.200">
                    Website Developer at{" "}
                    <Box as="span" color="yellow.300">
                      PT Bank Mandiri
                    </Box>
                  </Box>
                  <Box fontFamily="mono" mt="2">
                    01 Juli - 01 September 2021
                  </Box>
                  <UnorderedList mt="4">
                    <ListItem>Create a website for clients</ListItem>
                    <ListItem>Maintenance an internal website</ListItem>
                    <ListItem>
                      Handling some basic data with Microsoft Excels
                    </ListItem>
                  </UnorderedList>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>

        {/*  My Projects */}
        <Box px="4" py="12" mt="12" id="project">
          <SectionTitle section={{ number: "03", title: "My Projects" }} />
          <Box>{projectElem}</Box>
        </Box>

        {/*  Contact */}
        <Box px="4" py="12" mt="12" id="contact">
          <SectionTitle section={{ number: "04", title: "Contact" }} />
          <Box as="h1" fontSize="4xl" fontWeight="bold" textAlign="center">
            Get In Touch
          </Box>
          <Box
            as="p"
            fontSize="lg"
            color="gray.400"
            textAlign="center"
            width={["90%", "90%", "80%", "70%"]}
            mx="auto"
          >
            As of now, I am currently looking for a job anything related to my
            skills. If you are interested to work with me, just contact me
            below.
          </Box>
          <Box display="flex" justifyContent="center" mt="8">
            <Button
              as="a"
              variant="outline"
              fontFamily="mono"
              colorScheme="yellow"
              href="mailto:iqbalkorompiz@gmail.com"
            >
              Contact Me
            </Button>
          </Box>
        </Box>

        {/*  Footer */}
        <Box
          px="4"
          my="6"
          id="contact"
          color="gray.400"
          textAlign="center"
          fontFamily="mono"
        >
          Built with love by Iqbal Ramadhan
        </Box>
      </Box>
    </>
  );
};

export default Home;
