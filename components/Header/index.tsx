import { NextPage } from "next";
import { Box, Button } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

const Header: NextPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);
  const [cw, setCw] = useState<number>(0);
  const [ch, setCh] = useState<number>(0);

  const onClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.getElementById("body")?.classList.add("remove");
      document.getElementById("active")?.classList.add("active");
    } else {
      document.getElementById("body")?.classList.remove("remove");
      document.getElementById("active")?.classList.remove("active");
    }

    function setWindowSize() {
      setCw(window?.innerWidth);
    }

    function getScroll() {
      setCh(window?.scrollY);
    }

    window.addEventListener("resize", setWindowSize);
    window.addEventListener("scroll", getScroll);

    if (!open) {
      if (cw > 769) {
        setOpen(false);
      }
    }

    if (ch >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }, [open, ch, cw]);

  const isOpen = open === false ? "-500" : "0";

  return (
    <Box
      as="header"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      w="100%"
      px={["5", "10", "20"]}
      h="20"
      background={scroll ? "gray.900" : "transparent"}
      position="sticky"
      top="0"
      zIndex="999"
    >
      <Box
        fontWeight="bold"
        color="yellow.300"
        fontFamily="mono"
        fontSize="1.3rem"
        as="a"
        href="#hero"
      >
        Iqbal
      </Box>
      <Box display={["initial", "initial", "none"]} onClick={onClick}>
        <Icon
          icon="ci:menu-alt-01"
          fontSize="2.5rem"
          color="var(--chakra-colors-yellow-300)"
          cursor="pointer"
        />

        <Box
          display={["flex", "flex", "none"]}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          gap="12"
          background="gray.800"
          width="70%"
          height="100vh"
          position="fixed"
          top="0"
          right={isOpen}
          zIndex="999"
          fontSize="1.2rem"
          transition="0.3s ease-in"
        >
          <Box
            position="absolute"
            top="5"
            right="8"
            cursor="pointer"
            onClick={onClick}
          >
            <Icon icon="ep:close" fontSize="2.5rem" />
          </Box>
          <Box
            fontFamily="mono"
            textAlign="center"
            _hover={{ color: "yellow.300" }}
          >
            <a href="#about">
              <Box as="span" display="block" color="yellow.300">
                01.
              </Box>
              About
            </a>
          </Box>
          <Box
            fontFamily="mono"
            textAlign="center"
            _hover={{ color: "yellow.300" }}
          >
            <a href="#experience">
              <Box as="span" display="block" color="yellow.300">
                02.
              </Box>
              Experience
            </a>
          </Box>
          <Box
            fontFamily="mono"
            textAlign="center"
            _hover={{ color: "yellow.300" }}
          >
            <a href="#project">
              <Box as="span" display="block" color="yellow.300">
                03.
              </Box>
              Project
            </a>
          </Box>
          <Box
            fontFamily="mono"
            textAlign="center"
            _hover={{ color: "yellow.300" }}
          >
            <a href="#contact">
              <Box as="span" display="block" color="yellow.300">
                04.
              </Box>
              Contact
            </a>
          </Box>
          <Box fontFamily="mono">
            <Button
              as="a"
              colorScheme="yellow"
              cursor="pointer"
              href="pdf/resume.pdf"
              target="_blank"
              size="md"
              variant="outline"
            >
              Resume
            </Button>
          </Box>
        </Box>
      </Box>

      <Box
        display={["none", "none", "flex"]}
        alignItems="center"
        as="nav"
        gap={["4", "4", "4", "8"]}
      >
        <Box fontFamily="mono">
          <a href="#about">
            <Box as="span" color="yellow.300">
              01.
            </Box>
            About
          </a>
        </Box>
        <Box fontFamily="mono">
          <a href="#experience">
            <Box as="span" color="yellow.300">
              02.
            </Box>
            Experience
          </a>
        </Box>
        <Box fontFamily="mono">
          <a href="#project">
            <Box as="span" color="yellow.300">
              03.
            </Box>
            Project
          </a>
        </Box>
        <Box fontFamily="mono">
          <a href="#contact">
            <Box as="span" color="yellow.300">
              04.
            </Box>
            Contact
          </a>
        </Box>
        <Box fontFamily="mono">
          <Button
            as="a"
            colorScheme="yellow"
            cursor="pointer"
            href="pdf/resume.pdf"
            target="_blank"
            size="md"
            variant="outline"
          >
            Resume
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
