/** @jsx jsx */
import { useState } from "react";
import { keyframes } from "@emotion/core";
import { jsx, Box, Grid, Container, Flex, Text, Button } from "theme-ui";
import SectionHeading from "components/section-heading";
import PriceTable from "components/cards/price-table";
import { rgba } from "polished";
import { Dialog, Typography } from "@material-ui/core";

const annual = [
  {
    id: 1,
    title: "Section C",
    subtitle: "For Small teams or office",
    amount: 0,
    isRecommended: false,
    buttonText: "Submit",
    features: [
      {
        id: 1,
        isAvailable: true,
        title: "Ultimate access to all course, exercises and assessments",
      },
      {
        id: 2,
        isAvailable: true,
        title: `Free access for all kind of exercise corrections with downloads.`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Total assessment corrections with free download access system`,
      },
      {
        id: 4,
        isAvailable: false,
        title: `Unlimited download of courses on the mobile app contents`,
      },
      {
        id: 5,
        isAvailable: false,
        title: `Download and print courses and exercises in PDF`,
      },
    ],
  },
  {
    id: 2,
    title: "Higher Studies",
    subtitle: "For startup enterprise",
    // amount: 89.99 * 12 - 10,
    isRecommended: false,
    buttonText: "Register",
    features: [
      {
        id: 1,
        isAvailable: true,
        title: "Interactive Learning Resources",
      },
      {
        id: 2,
        isAvailable: true,
        title: `Expert Mentorship & Guidance.`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Supportive Learning Community && Educational Support Services`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Continuous Platform Enhancement & Updates`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Comprehensive Research Opportunities & Collaborative Study Projects`,
      },
    ],
  },
  {
    id: 3,
    title: "Job Seeker",
    subtitle: "For Small teams or office",
    amount: 0,
    isRecommended: false,
    buttonText: "Register",
    features: [
      {
        id: 1,
        isAvailable: true,
        title: "Industry-Recognized Certificates",
      },
      {
        id: 2,
        isAvailable: true,
        title: `Ongoing Platform Improvement and Updates`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `Expert Guidance & Coaching`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Accessible Anytime, Anywhere`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Job Search Assistance Resources`,
      },
    ],
  },
];

const Pricing = () => {
  // const [plan, setPlan] = useState({
  //   active: "monthly",
  //   pricingPlan: monthly,
  // });

  // const handlePlan = (plan) => {
  //   if (plan === "monthly") {
  //     setPlan({
  //       ...plan,
  //       active: "monthly",
  //       pricingPlan: monthly,
  //     });
  //   }
  //   if (plan === "annual") {
  //     setPlan({
  //       ...plan,
  //       active: "annual",
  //       pricingPlan: annual,
  //     });
  //   }
  // };
  return (
    <Box
      as="section"
      id="pricing"
      sx={styles.section}
      variant="section.pricing"
    >
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Services we offfers"
          description="Experience top-notch services tailored to your needs. From consulting to development, we provide solutions that exceed expectations."
        />

        <Grid sx={styles.priceWrapper}>
          {annual.map((price, index) => (
            <PriceTable price={price} key={`${index}`} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  heading: {
    mb: [60, null, null, 50],
  },
  priceSwitcher: {
    backgroundColor: "#F7F8FB",
    borderRadius: "5px",
    border: `1px solid ${rgba("#fff", 0.2)}`,
    margin: ["0 auto 40px", null, null, "0 auto 50px"],
    maxWidth: 300,
    position: "relative",
    p: 2,
    ".discount": {
      position: "absolute",
      backgroundColor: "primary",
      color: "#fff",
      minHeight: 25,
      display: "flex",
      alignItems: "center",
      padding: "0 8px",
      fontSize: 13,
      fontWeight: 700,
      textTransform: "unset",
      borderRadius: 25,
      right: 38,
      top: "-17px",
    },
    button: {
      minHeight: "48px",
      px: "25px",
      fontWeight: 500,
      "&.active": {
        backgroundColor: "#fff",
        color: "text",
      },
      ":focus": {
        outline: "0 none",
      },
    },
  },
  priceWrapper: {
    gap: 30,
    display: "grid",
    gridTemplateColumns: [
      "repeat(1, 340px)",
      "repeat(1, 340px)",
      "repeat(1, 340px)",
      "repeat(3,1fr)",
      "repeat(3, 400px)",
      "repeat(3, 400px)",
      "repeat(3, 400px)",
    ],
    justifyContent: "center",
    ".priceCard": {
      ".priceHeader": {
        animation: `${fadeIn} 0.8s linear`,
      },
      "ul > li": {
        animation: `${fadeIn2} 0.7s linear`,
      },
      ".priceAmount": {
        animation: `${fadeIn} 0.9s linear`,
      },
      ".priceButton": {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
