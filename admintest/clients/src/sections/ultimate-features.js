/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui";
import SectionHeading from "components/section-heading";
import UltimateFeature from "components/cards/ultimate-feature";

import bulb from "assets/images/icons/bulb.png";
import dart from "assets/images/icons/dart.png";
import rocket from "assets/images/icons/rocket.png";
import trophy from "assets/images/icons/trophy.png";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import checkFilledCircle from "assets/images/icons/check-circle-filled.png";
import Image from "components/image";

const data = [
  {
    id: 1,
    icon: bulb,
    title: "Vision",
    description:
      "Strategic solutions tailored for your success: Our consultancy drives growth and innovation.",
  },
  {
    id: 2,
    icon: dart,
    title: "Best Strategy",
    description: "Send money with three clicks by wire, check, or ACH.",
  },
  {
    id: 3,
    icon: rocket,
    title: "Mission",
    description:
      "Empowering clients through insightful guidance and actionable strategies for sustainable success.",
  },
  {
    id: 4,
    icon: trophy,
    title: "Associated and Recognized by",
    description: `Trusted by industry leaders for excellence and expertise in consultancy services.`,
  },
];

const feedback = [
  {
    id: 1,
    name: "Sharon joshi",
    message:
      "Innovative solutions, exceptional service; exceeded expectations, highly recommended consultancy.",
    img: "/static/images/avatar/1.jpg",
  },
  {
    id: 2,
    name: "Nizam",
    message:
      "Innovative solutions, exceptional service; exceeded expectations, highly recommended consultancy.",
    img: "/static/images/avatar/1.jpg",
  },
  {
    id: 3,
    name: "Sharon joshi",
    message:
      "Innovative solutions, exceptional service; exceeded expectations, highly recommended consultancy.",
    img: "/static/images/avatar/1.jpg",
  },
];

const UltimateFeatures = () => {
  return (
    <Box as="section" id="ultimate-feature" variant="section.ultimateFeature">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="About us"
          description="Guided by expertise and driven by dedication, our consultancy delivers tailored strategies, empowering businesses to navigate challenges and seize opportunities for sustainable growth and success in dynamic markets."
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <UltimateFeature key={item.id} data={item} />
          ))}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: 8 }}>
          <Box>
            <SectionHeading
              sx={styles.heading}
              title="Our Users"
              // description="Guided by expertise and driven by dedication, our consultancy delivers tailored strategies, empowering businesses to navigate challenges and seize opportunities for sustainable growth and success in dynamic markets."
            />
            <List
              sx={{ width: "100%", maxWidth: 460, bgcolor: "background.paper" }}
            >
              {feedback.map((item) => (
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={item.name} src={item.img} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {item.message}
                        </Typography>
                        {/* {" — I'll be in your neighborhood doing errands this…"} */}
                      </React.Fragment>
                    }
                  />
                  {/* <Divider variant="inset" component="li" /> */}
                </ListItem>
              ))}
            </List>
          </Box>
          <Box>
            <SectionHeading
              sx={styles.heading}
              title="What carrier consultation in important"
              // description="Guided by expertise and driven by dedication, our consultancy delivers tailored strategies, empowering businesses to navigate challenges and seize opportunities for sustainable growth and success in dynamic markets."
            />
            <List
              sx={{ width: "100%", maxWidth: 460, bgcolor: "background.paper" }}
            >
              <ListItem disablePadding>
                {/* <ListItemButton> */}
                <ListItemIcon>
                  <Image src={checkFilledCircle} alt="check icon" />
                </ListItemIcon>
                <ListItemText primary="Know your strenght and interest unblie you" />

                {/* </ListItemButton> */}
              </ListItem>

              <ListItem disablePadding>
                {/* <ListItemButton> */}
                <ListItemIcon>
                  <Image src={checkFilledCircle} alt="check icon" />
                </ListItemIcon>
                <ListItemText primary="Know your strenght and interest unblie you" />

                {/* </ListItemButton> */}
              </ListItem>

              <ListItem disablePadding>
                {/* <ListItemButton> */}
                <ListItemIcon>
                  <Image src={checkFilledCircle} alt="check icon" />
                </ListItemIcon>
                <ListItemText primary="How can you bind your carrier path" />

                {/* </ListItemButton> */}
              </ListItem>

              <ListItem disablePadding>
                {/* <ListItemButton> */}
                <ListItemIcon>
                  <Image src={checkFilledCircle} alt="check icon" />
                </ListItemIcon>
                <ListItemText primary="Make a carier decision" />

                {/* </ListItemButton> */}
              </ListItem>
            </List>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default UltimateFeatures;

const styles = {
  heading: {
    marginBottom: [60, 60, 60, 80],
  },
  features: {
    gap: ["35px 60px", 60, 60, 40, 30, 60],
    display: ["grid", "grid"],
    gridTemplateColumns: [
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(2, 1fr)",
      "repeat(4, 1fr)",
    ],
  },
  features1: {
    gap: ["35px 60px", 60, 60, 40, 30, 60],
    display: ["grid", "grid"],
    gridTemplateColumns: [
      "repeat(2, 1fr)",
      "repeat(1, 1fr)",
      "repeat(1, 1fr)",
      "repeat(2, 1fr)",
      "repeat(4, 1fr)",
    ],
  },
};
