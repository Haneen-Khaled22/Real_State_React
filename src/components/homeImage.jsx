import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import img from "../images/imggg.png";

export default function FirstSection() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <img
        src={img}
        alt="Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.1)",
          px: 2,
          paddingTop: "80px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography variant="h2" fontWeight="bold" mb={2}>
          BUILDING YOUR FUTURE
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Typography fontSize="20px" maxWidth="600px">
          Find Your Dream Home with Us  Where Comfort Meets Luxury
          </Typography>
        </motion.div>
      </Box>
    </Box>
  );
}
