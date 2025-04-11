import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";

import logo from "../images/logo (3).png";



function ResponsiveAppBar() {
 
  return (
    <AppBar
      position="absolute"
      sx={{
        height: "110px",
        justifyContent: "center",
        backgroundColor: "transparent",
        boxShadow: "none",
        zIndex: 10,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobile Menu Icon */}
         
         

          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "200px",
              height: "190px",
              marginRight: "16px",
            }}
          />

          {/* Desktop Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              gap: 2,
            }}
          >
           
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
