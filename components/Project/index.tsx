import { NextPage } from "next";
import { Box, Badge, Link, Button } from "@chakra-ui/react";
import Image from "next/image";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface Heading {
  type: string;
  name: string;
  image: string;
  description: string;
  badge: string[];
  direction: string;
  link?: string;
}

interface Props {
  project: Heading;
}

const Project: NextPage<{ project: Props }> = ({
  project: {
    project: { type, name, image, description, badge, direction, link },
  },
}) => {
  const textPosition =
    direction === "left" ? ["0", "0", "30%", "50%"] : ["0", "0", "0", "0"];

  const fadePosition = direction === "left" ? "fade-left" : "fade-right";
  const fadeImagePosition = direction === "left" ? "fade-right" : "fade-left";

  const imagePosition = direction === "left" ? "0" : ["0", "0", "50%", "40%"];

  return (
    <Box display="grid" width="100%" mt="20" alignItems="center">
      <Box
        width={["", "", "70%", "50%"]}
        height="100%"
        zIndex="777"
        gridColumn="1 / -1"
        gridRow="1 / -1"
        marginLeft={textPosition}
        background={["gray.900", "gray.900", "none"]}
        borderRadius="lg"
        p={["4", "12", "0"]}
        py={["4", "12", "12"]}
        opacity="0.95"
        data-aos={fadePosition}
      >
        <Box
          fontFamily="mono"
          color="yellow.300"
          textAlign={
            direction === "left"
              ? ["left", "left", "right"]
              : ["left", "left", "left"]
          }
        >
          {type}
        </Box>
        <Box
          fontSize="1.4rem"
          fontWeight="bold"
          textAlign={
            direction === "left"
              ? ["left", "left", "right"]
              : ["left", "left", "left"]
          }
        >
          {name}
        </Box>
        <Box
          mt="8"
          textAlign={
            direction === "left"
              ? ["left", "left", "right"]
              : ["left", "left", "left"]
          }
          background={["none", "none", "gray.900"]}
          borderRadius="lg"
          p={["0", "0", "6"]}
          opacity={["1", "1", "0.9"]}
        >
          {description}
        </Box>
        <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" gap="2" mt="8">
          {badge.map((val, idx) => {
            return (
              <Badge
                colorScheme="yellow"
                variant="solid"
                color="gray.900"
                key={idx}
                textAlign="center"
              >
                {val}
              </Badge>
            );
          })}
        </Box>
        {link && (
          <Box
            textAlign={
              direction === "left"
                ? ["left", "left", "right"]
                : ["left", "left", "left"]
            }
            mt="4"
            display="flex"
            alignItems="center"
            justifyContent={
              direction === "left"
                ? "flex-end"
                : ["flex-end", "flex-end", "flex-start"]
            }
            gap="2"
          >
            <a href={link} target="_blank" rel="noreferrer">
              <Button size="sm">
                <ExternalLinkIcon fontSize="1.2rem" /> Visit Site
              </Button>
            </a>
          </Box>
        )}
      </Box>
      <Box
        position="relative"
        width={["100%", "100%", "50%", "60%"]}
        height={["100%", "100%", "60%", "100%"]}
        gridColumn="1 / -1"
        gridRow="1 / -1"
        marginLeft={imagePosition}
        data-aos={fadeImagePosition}
      >
        <Image
          src={image}
          alt="Project"
          layout="fill"
          objectFit="fill"
          objectPosition="center"
          style={{ borderRadius: "8px", zIndex: "-999" }}
        />
      </Box>
    </Box>
  );
};

export default Project;
