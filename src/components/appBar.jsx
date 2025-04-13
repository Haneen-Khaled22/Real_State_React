import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Container from "@mui/material/Container";

import logo from "../images/1-removebg-preview (2).png";



function ResponsiveAppBar() {
  return (
    <AppBar
      position="absolute"
      sx={{
        height: "200px",
        justifyContent: "center",
        backgroundColor: "transparent",
        boxShadow: "none",
        zIndex: 10,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Spacer to push content to the right */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Logo on the right */}
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "220px",
              height: "220px",
              marginLeft: "16px",
            }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}


export default ResponsiveAppBar;
