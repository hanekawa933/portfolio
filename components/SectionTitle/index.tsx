import { NextPage } from "next";
import { Box } from "@chakra-ui/react";

interface Props {
  number: string;
  title: string;
}

const SectionTitle: NextPage<{ section: Props }> = ({ section }) => {
  return (
    <Box display="flex" gap="5" alignItems="center" mb="4">
      <Box color="yellow.300" fontFamily="mono">
        {section.number}
      </Box>
      <Box
        fontFamily="mono"
        fontWeight="bold"
        fontSize={["2xl", "2xl", "3xl", "4xl"]}
      >
        {section.title}
      </Box>
      <Box flex="1" height="0.5" background="gray.600"></Box>
    </Box>
  );
};

export default SectionTitle;
