import * as React from "react";
import { Box, Typography, useTheme, useMediaQuery, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

import about from "../images/about.png";
import villaImg from "../images/villas.png";
import flatImg from "../images/flats.png";
import studioImg from "../images/studios.png";

const ServiceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.primary,
  backgroundColor: "#f9f9f9",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  borderRadius: "16px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
  overflow: "hidden",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
  },
}));

export default function AboutUs() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box p={6}>
      <Typography variant="h3" gutterBottom fontFamily={"monospace"} fontWeight={"bold"}>
        About Us
      </Typography>

      <Box width="150px" height="2px" bgcolor="grey.200" mx={2} />

      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        alignItems="center"
        justifyContent="space-between"
        gap={4}
      >
        <Box flex={1}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h4" gutterBottom fontFamily={"monospace"} fontWeight={"bold"}>
              Who are we?
            </Typography>
            <Typography variant="body1" color="textSecondary" letterSpacing={1}>
              <b>AL KHALED PROPERTY</b> specializes in offering a wide range of rental
              properties — from luxurious villas and modern flats to cozy studios —
              designed to meet every lifestyle and budget. Whether you're searching
              for a short-term stay or a long-term home, our dedicated team is here
              to help you find the perfect space with comfort, convenience, and
              style. With a strong focus on customer satisfaction, we make the
              rental process smooth, transparent, and stress-free. Your ideal home
              is just a step away with us.
            </Typography>
          </motion.div>
        </Box>

        <Box flex={1} textAlign="center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img
              src={about}
              alt="About Al Khaled Property"
              style={{
                width: "100%",
                maxWidth: 550,
                height: "auto",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
              }}
            />
          </motion.div>
        </Box>
      </Box>

      {/* Services Section */}
      <Box mt={6}>
        <Box width="150px" height="2px" bgcolor="grey.200" />
        <Typography
          variant="h4"
          gutterBottom
          fontFamily={"monospace"}
          fontWeight={"bold"}
          mt={2}
        >
          Services
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          fontFamily={"monospace"}
          color="grey"
          mt={2}
        >
          Offering a wide range of Rental Properties : 
        </Typography>

        <Box
          mt={4}
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          justifyContent="center"
          alignItems="stretch"
          gap={4}
        >
          {/* Villas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ServiceCard>
              <img
                src={villaImg}
                alt="Rent Villas"
                style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: "12px" }}
              />
              <Typography variant="h6" fontWeight="bold" mt={2} gutterBottom>
                Villas
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Discover luxurious villas perfect for families, vacations, or exclusive getaways.
              </Typography>
            </ServiceCard>
          </motion.div>

          {/* Flats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ServiceCard>
              <img
                src={flatImg}
                alt="Rent Flats"
                style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: "12px" }}
              />
              <Typography variant="h6" fontWeight="bold" mt={2} gutterBottom>
                Flats
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Choose from modern flats in prime locations with all the amenities you need.
              </Typography>
            </ServiceCard>
          </motion.div>

          {/* Studios */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ServiceCard>
              <img
                src={studioImg}
                alt="Rent Studios"
                style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: "12px" }}
              />
              <Typography variant="h6" fontWeight="bold" mt={2} gutterBottom>
                Studios
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Affordable and stylish studio apartments, ideal for solo living or short stays.
              </Typography>
            </ServiceCard>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
}
