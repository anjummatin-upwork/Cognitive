import React from "react";
import * as ROUTES from "../../constants/routes";
import logo from "../Files/logo.png";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import "./nav.css";
const Navigation = () => (
  <React.Fragment>
    <GlobalStyles
      styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
    />
    <CssBaseline />
    <AppBar
      style={{ background: "#032e54" }}
      position="sticky"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          <img noWrap sx={{ flexGrow: 1 }} src={logo} alt="logo"></img>
        </Typography>
        <nav>
          <Link
            variant="button"
            style={{ color: "#FFFFFF" }}
            href={ROUTES.Home}
            sx={{ my: 1, mx: 1.5 }}
          >
            Home
          </Link>
          <Link
            variant="button"
            style={{ color: "#FFFFFF" }}
            href={ROUTES.Overview}
            sx={{ my: 1, mx: 1.5 }}
          >
            Overview
          </Link>
          <Link
            variant="button"
            style={{ color: "#FFFFFF" }}
            href={ROUTES.About}
            sx={{ my: 1, mx: 1.5 }}
          >
            About
          </Link>
          <Link
            variant="button"
            style={{ color: "#FFFFFF" }}
            href={ROUTES.Blog}
            sx={{ my: 1, mx: 1.5 }}
          >
            Blog
          </Link>
        </nav>
        <Button
          href={ROUTES.GetYourReport}
          variant="outlined"
          style={{ background: "#08C5B6", color: "#FFFFFF" }}
          sx={{ my: 1, mx: 1.5 }}
        >
          Get your report
        </Button>
      </Toolbar>
    </AppBar>
  </React.Fragment>
);

export default Navigation;
