// /** @jsx jsx */
import { jsx, Box, Container, Text } from "theme-ui";
import SectionHeading from "components/section-heading";
import Feature from "components/cards/feature";
import { LearnMore } from "components/link";
import Image from "components/image";
import React from "react";

// import checkFilledCircle from "assets/images/icons/check-circle-filled.png";

import { Fragment } from "react";
const checkFilledCircle = "static/icons/check-circle-filled.png";
const data = [
  {
    id: 1,
    color: "#28D1DC",
    value: "1000+",
    title: "Students",
  },
  {
    id: 2,
    color: "#FF753A",
    value: "150+",
    title: "National,international collaburations",
  },
  {
    id: 3,
    color: "#FA578E",
    value: "300+",
    title: "Top schools & college partnership across india",
  },
  {
    id: 4,
    color: "#28DCB2",
    value: "Expert counsilors",
    title: "Counseling in hindi,english,malayalam etc...",
  },
];

const Features = () => {
  return (
    <Box as="section" variant="section.features">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            {data?.map((item) => (
              <Feature key={item?.id} feature={item} />
            ))}
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title={
                <Fragment>
                  {/* Smart Jackpots <br />
                  that you may love this anytime &amp; anywhere */}
                  We are trusted by
                </Fragment>
              }
              description="We are trusted by industry leaders worldwide for our exceptional expertise, dedication, and track record of delivering impactful solutions."
            />
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Global leaders trust our expertise.
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Proven expertise trusted by leaders
            </Text>
            {/* <Box sx={styles.explore}>
              <LearnMore path="#!" label="Explore More" />
            </Box> */}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Features;

const styles = {
  contentWrapper: {
    gap: [30, 30, 30, 30, 40, 60, 70, 120],
    display: ["flex", "flex", "grid"],
    flexDirection: ["column-reverse", "column-reverse", "unset"],
    gridTemplateColumns: [
      "1.2fr 0.8fr",
      "1.2fr 0.8fr",
      "1.2fr 0.8fr",
      "1.1fr 0.9fr",
      "1.1fr 0.9fr",
      "1.1fr 0.9fr",
      "1.2fr 0.8fr",
    ],
    alignItems: "center",
  },
  leftContent: {
    gap: [20, 20, 20, 20, 30, 45],
    display: ["grid", "grid"],
    gridTemplateColumns: "repeat(2, 1fr)",
    alignItems: "flex-start",
    "> div": {
      ":first-of-type": {
        mt: ["65px"],
      },
      ":last-of-type": {
        mt: ["-65px"],
      },
    },
  },
  rightContent: {
    // ml: ['120px'],
  },
  heading: {
    textAlign: "left",
    mb: ["20px"],
    mt: [0, 0, "-70px"],
    h2: {
      fontSize: ["28px", "28px", "28px", "28px", "36px", "40px"],
      lineHeight: [1.25, 1.5],
      letterSpacing: "-1.5px",
      br: {
        display: ["none", "none", "none", "block"],
      },
    },
    p: {
      mt: ["15px", "10px"],
    },
  },
  listItem: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 2.81,
    display: "flex",
    alignItems: "center",
    img: {
      mr: "10px",
    },
  },
  explore: {
    mt: ["20px", "20px", "20px", "20px", "40px"],
  },
};
