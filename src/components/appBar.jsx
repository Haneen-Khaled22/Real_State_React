import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../images/logo (3).png";

// const pages = [
  
  
//   { label: "Contact Us", path: "/contactus" },
//   { label: "About Us", path: "/aboutus" },
//   { label: "Home", path: "/" },
// ];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
            {/* {pages.map((page) => (
              <Button
                key={page.label}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "rgba(3, 28, 35, 0.73)",
                  display: "block",
                  textTransform: "none",
                  fontWeight: "bold",
                  fontSize: "18px",
                  mx: 1.5,
                }}
              >
                {page.label}
              </Button>
            ))} */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
