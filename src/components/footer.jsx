import React from "react";
import { Box, Container, Grid, Typography, IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(1, 33, 50)",
        color: "white",
        py: { xs: 5, md: 6 },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
          direction={{ xs: "column", sm: "row" }}
        >
          {/* Brand Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              fontWeight="bold"
              gutterBottom
              fontFamily="monospace"
              fontSize={{ xs: 22, sm: 26 }}
            >
             REAL ESTATE 90
            </Typography>
            <Typography
              variant="body2"
              color="gray"
              fontSize={{ xs: 13, sm: 14 }}
              maxWidth={300}
            >
              Building homes, shaping futures. Let's bring your dream space to life.
            </Typography>
          </Grid>

          {/* Social Media Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems={{ xs: "center", sm: "flex-start" }}
              textAlign={{ xs: "center", sm: "left" }}
            >
              <Typography fontWeight="bold" gutterBottom>
                Follow Us
              </Typography>
              <Stack direction="row" spacing={2}>
                <IconButton
                  color="inherit"
                  href="https://www.facebook.com/share/1BnixpcYc3/?mibextid=wwXIfr"
                  target="_blank"
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  href="https://wa.me/+9710522269405"
                  target="_blank"
                >
                  <WhatsAppIcon />
                </IconButton>
                
              </Stack>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Copyright */}
        <Box
          textAlign="center"
          borderTop="1px solid rgba(255,255,255,0.1)"
          mt={5}
          pt={3}
        >
          <Typography
            variant="body2"
            color="gray"
            fontSize={{ xs: 12, sm: 14 }}
          >
            &copy; {new Date().getFullYear()} Real Estate 90. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
