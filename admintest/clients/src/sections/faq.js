/** @jsx jsx */
import { jsx, Container, Box } from "theme-ui";
import SectionHeader from "components/section-heading";
import Accordion from "components/accordion/accordion";
const faqs = [
  {
    title: "Colleges in india",
    contents: [
      "Find colleges by specification",
      "Find colleges by course",
      "congdggd colleges",
    ],
  },
  {
    title: "University in india",
    contents: [
      "Government university",
      "Private university",
      "Deemed-to-be-universities",
    ],
  },
];
export default function Faq() {
  return (
    <Box as="section" id="faq" variant="section.faq">
      <Container>
        <SectionHeader
          title="College/University"
          // description="Our support team ready to help you, please contact with them"
        />
        <Box
          sx={{
            display: "flex",
            width: ["100%", null, null, "650px", "745px"],
            flexDirection: "column",
            mx: "auto",
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </Box>
  );
}
