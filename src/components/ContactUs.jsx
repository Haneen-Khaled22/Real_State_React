import React, { useRef } from "react";
import { Box, Typography, Grid, IconButton, Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Facebook,
  
  MailOutline,
  Phone,
} from "@mui/icons-material";
import { motion, useInView } from "framer-motion";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const MotionGrid = motion(Grid);

export default function ContactUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <Box ref={ref} id="contact" px={6} py={10}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Typography
          variant="h4"
          gutterBottom
          fontFamily={"monospace"}
          fontWeight={"bold"}
          mt={2}
        >
          Contact Us
        </Typography>
        <Box width="150px" height="2px" bgcolor="grey.300" mb={6} />
      </motion.div>

      <MotionGrid
        container
        spacing={6}
        justifyContent={"space-between"}
        alignItems="center"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        {/* Left: Text */}
        <Grid item xs={12} md={6}>
          <Typography variant="body1" color="textSecondary">
            Whether you’re looking for your next home, want to ask us something,
            <br /> or just feel like saying hi — we’re happy to hear from you.
          </Typography>
        </Grid>

        {/* Right: Contact info */}
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" alignItems="center" gap={2}>
              <Phone sx={{ color: "rgba(2, 19, 26, 0.73)" }} />
              <Link
                href="https://wa.me/+9710522269405"
                color="rgba(2, 19, 26, 0.73)" // You can use "primary", "secondary", or a custom color
                underline="hover"
                fontWeight="bold"
                fontSize={18}
              >
                0522269405
              </Link>
            </Box>
            <Box display="flex" alignItems="center" gap={2}>
              <MailOutline sx={{ color: "rgba(2, 19, 26, 0.73)" }} />
              <Link
                href="mailto:info@alkhaledproperty.com"
                color="rgba(2, 19, 26, 0.73)" // You can use "primary", "secondary", or a custom color
                underline="hover"
                fontWeight="bold"
                fontSize={18}
              >
                info@alkhaledproperty.com
              </Link>
            </Box>
            <Box display="flex" alignItems="center" gap={2}>
              <LocationOnIcon sx={{ color: "rgba(2, 19, 26, 0.73)" }} />
              <Link
                color="rgba(2, 19, 26, 0.73)" // You can use "primary", "secondary", or a custom color
                underline="hover"
                fontWeight="bold"
                fontSize={18}
              >
                Abu Dhabi, United Arab Emirates
              </Link>
            </Box>
            <Box display="flex" gap={2} mt={2}>
              <IconButton
                href="https://www.facebook.com/share/1BnixpcYc3/?mibextid=wwXIfr"
                target="_blank"
              >
                <Facebook
                  sx={{ color: "rgba(6, 64, 126, 0.73)", fontSize: "25px" }}
                />
              </IconButton>
              <IconButton href="https://wa.me/+9710522269405" target="_blank">
                <WhatsAppIcon
                  sx={{ color: "rgba(36, 126, 6, 0.73)", fontSize: "25px" }}
                />
              </IconButton>
            </Box>
          </Box>
        </Grid>
      </MotionGrid>
    </Box>
  );
}
