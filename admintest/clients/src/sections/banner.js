/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button, Image } from "theme-ui";
import banner from "assets/images/banner.png";
import { Link as MenuLink } from "react-scroll";
import { Link as A } from "theme-ui";
import paypal from "assets/images/paypal.png";
import google from "assets/images/google.png";
import dropbox from "assets/images/dropbox.png";
import Modal, { CloseButton } from "components/modal/modal";
import { useState } from "react";
import { Typography } from "@material-ui/core";
import NextLink from "next/link";
import { NavLink } from "components/link";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Box id="home" as="section" variant="section.banner">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>
              Professional Communication For Your Team
            </Heading>
            <Text as="p" sx={styles.text}>
              Get your blood tests delivered at let home collect sample from the
              victory of the managements that supplies best design system
              guidelines ever.
            </Text>
            {/* <Button variant="primary" sx={styles.button}>
              Explore Now
            </Button> */}
            {/* <Box sx={styles.clients}>
              <Image src={paypal} alt="paypal" />
              <Image src={google} alt="google" />
              <Image src={dropbox} alt="dropbox" />
            </Box> */}
          </Box>
          <Box sx={styles.illustration}>
            <Image src={banner} alt="banner" />
          </Box>
        </Box>
      </Container>
      <Modal isOpen={isOpen}>
        <CloseButton
          onClick={() => setIsOpen(false)}
          size="24px"
          color="#fff"
        />

        <Box
          sx={{
            display: "block",
            justifyContent: "center",
            textAlign: "center",
            p: 3,
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Welcome!
            </Typography>
            <Typography>
              New to IBS PVT LTD <br></br>Register here...
            </Typography>
          </Box>
          <Box sx={{ p: 3 }}>
            <MenuLink
              to="pricing"
              spy={true}
              offset={-70}
              smooth={true}
              duration={500}
              className="nav-item"
              activeClass="active"
              // {...rest}
            >
              <Button onClick={() => setIsOpen(false)}>Register</Button>
            </MenuLink>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Banner;

const styles = {
  contentWrapper: {
    display: [null, null, null, "flex", "grid"],
    gridTemplateColumns: "repeat(2, 1fr)",
    alignItems: "center",
    justifyContent: "center",
    minHeight: [null, null, null, null, null, "100vh"],
    pt: [100, null, null, 120, 130, 120, 0],
  },
  content: {
    maxWidth: [507, null, null, 324, 450],
  },
  title: {
    fontWeight: "bold",
    fontSize: ["30px", null, null, null, "42px", "40px", "60px"],
    lineHeight: 1.33,
    letterSpacing: "-1px",
    color: "textSecondary",
  },
  text: {
    fontSize: ["14px", "14px", "14px", "16px", "16px", "18px"],
    lineHeight: [1.85, 1.85, 1.85, 1.85, 1.85, 2.33],
    color: "textSecondary",
    mt: ["14px", "19px"],
  },
  button: {
    display: ["none", "flex"],
    mt: [45, 45, 45, 25, 25],
  },
  clients: {
    display: "flex",
    alignItems: "center",
    mt: ["20px", "45px", "45px", "30px", "45px"],
    img: {
      maxWidth: ["80px", "100%", "100%", "100%"],
      "+ img": {
        ml: ["14px", "28px", "28px", "20px"],
      },
    },
  },
  illustration: {
    display: ["block", "block"],
    mt: ["30px", "30px", 0],
    mb: ["60px", "60px", 0],
    img: {
      maxWidth: ["100%", "100%", "100%", "100%", "90%", "90%", "100%"],
    },
  },
};
