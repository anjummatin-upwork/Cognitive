import React from "react";
import {
  Carousel,
  Button,
  ButtonGroup,
  Card,
  CardGroup,
  Form,
  Container,
} from "react-bootstrap";
import logo from "../Files/landing.png";
import uploadLogo from "../Files/upload.png";
import report from "../Files/report.png";
import choosePlan from "../Files/choosePlan.png";
import line from "../Files/line.png";
import line1 from "../Files/line1.png";
import group from "../Files/group.png";
import previewData from "../Files/previewData.png";
import line3 from "../Files/line3.png";
import advanceReport from "../Files/advanceReport.png";
import blog from "../Files/blog.png";
import "./home.css";
import * as ROUTES from "../../constants/routes";

import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import MaterialCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import MaterialContainer from "@mui/material/Container";
import MaterialButton from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MaterialButtonGroup from "@mui/material/ButtonGroup";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import footerLogo from "../Files/footer1.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Get this plan",
    buttonVariant: "outlined",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get this plan",
    buttonVariant: "outlined",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Get this plan",
    buttonVariant: "outlined",
  },
];

const Home = () => (
  <div>
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={logo} />
        <Carousel.Caption className="carousel-caption-first">
          <h1 className="carouselHeader">
            Do you know <br /> what is in your DNA?
          </h1>
          <p>Test lines here</p>
        </Carousel.Caption>
        <Carousel.Caption className="carousel-caption-second">
          <Box sx={{ "& > button": { m: 1 } }}>
            <MaterialButton
              variant="outlined"
              id="moreInformationButton"
              style={{ color: "#032E54" }}
              sx={{ padding: 1 }}
            >
              More information
            </MaterialButton>
            <MaterialButton
              id="getYourReportButton"
              style={{ backgroundColor: "#FFFFFF", color: "#032E54" }}
              href={ROUTES.GetYourReport}
              sx={{ padding: 1 }}
            >
              Get your report
            </MaterialButton>
          </Box>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Card className="text-center">
      <Card.Body>
        <Card.Title>
          <h2>You're so close to know it</h2>
        </Card.Title>
        <Card.Img variant="line" src={line} />
      </Card.Body>
    </Card>

    <CardGroup style={{ width: "100%" }}>
      <Card className="plan">
        <Card.Img variant="top" src={uploadLogo} />
        <Card.Body>
          <Card.Title>Upload your DNA</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="plan">
        <Card.Img variant="top" src={choosePlan} />
        <Card.Body>
          <Card.Title>Choose a Plan</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{" "}
          </Card.Text>
          <MaterialButton
            style={{ backgroundColor: "#032E54", color: "#FFFFFF" }}
          >
            Start Now
          </MaterialButton>
        </Card.Body>
      </Card>
      <Card className="plan">
        <Card.Img variant="top" src={report} />
        <Card.Body>
          <Card.Title>Get your Report</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>

    <Card className="text-center">
      <Card.Body>
        <Card.Img src={line1} />
      </Card.Body>
    </Card>

    {/*DNA Report Content*/}
    <Card>
      <Card.Body>
        <Card.Title>
          <h2>Why get your DNA report?</h2>
        </Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Card.Text>
        <Card.Img src={group} />
      </Card.Body>
    </Card>

    {/*Privacy Content*/}
    <MaterialCard sx={{ padding: 1 }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia component="img" image={previewData} />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "55%",
            padding: "50px",
            color: "#FFFFFF",
          }}
        >
          <Typography variant="h4">Privacy Data</Typography>
          <Typography variant="body2">
            Cursus in hac habitasse platea dictumst quisque sagittis purus.
            Tortor consequat id porta nibh venenatis cras sed felis eget. Dis
            parturient montes nascetur ridiculus.
          </Typography>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item>
              <img src={line3} width="15px" />
            </Grid>
            <Grid item>Sagittis purus sit amet volutpat consequat</Grid>
          </Grid>
          <Grid
            container
            direction="row"
            alignItems="center"
            spacing={1}
            alignItems="flex-end"
          >
            <Grid item>
              <img src={line3} width="15px" />
            </Grid>
            <Grid item>Accumsan lacus vel facilisis volutpat</Grid>
          </Grid>
        </Box>
      </Box>
    </MaterialCard>

    {/*Advance Content*/}
    <MaterialCard sx={{ padding: 1 }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia component="img" image={advanceReport} />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%",
            padding: "50px",
            color: "#FFFFFF",
          }}
        >
          <Typography variant="h4">Advanced Report</Typography>
          <Typography variant="body2">
            Purus faucibus ornare suspendisse sed nisi lacus. Pellentesque
            adipiscing commodo elit at imperdiet dui accumsan sit amet.
          </Typography>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item>
              <img src={line3} width="15px" />
            </Grid>
            <Grid item>Sit amet luctus venenatis</Grid>
          </Grid>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item>
              <img src={line3} width="15px" />
            </Grid>
            <Grid item>Imperdiet dui accumsan sit amet nulla</Grid>
          </Grid>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item>
              <img src={line3} width="15px" />
            </Grid>
            <Grid item>Penatibus et magnis dis parturient montes</Grid>
          </Grid>
        </Box>
      </Box>
    </MaterialCard>

    <Card className="text-left">
      <Card.Body>
        <Card.Title>
          <h2>Choose the plan that fits you better</h2>
        </Card.Title>
      </Card.Body>
    </Card>
    {/**Material Pricing */}
    <MaterialContainer maxWidth="md" component="main">
      <Grid container spacing={5} alignItems="flex-end">
        {tiers.map((tier) => (
          // Enterprise card is full width at sm breakpoint
          <Grid item spacing={24} key={tier.title} md={4}>
            <Card>
              <CardHeader
                title={tier.title}
                subheader={tier.subheader}
                titleTypographyProps={{ align: "center" }}
                action={tier.title === "Pro" ? <StarIcon /> : null}
                subheaderTypographyProps={{
                  align: "center",
                }}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.grey[200]
                      : theme.palette.grey[700],
                }}
              />
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "baseline",
                    mb: 2,
                  }}
                >
                  <Typography component="h2" variant="h3" color="text.primary">
                    ${tier.price}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    /mo
                  </Typography>
                </Box>
                <ul>
                  {tier.description.map((line) => (
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                      key={line}
                    >
                      {line}
                    </Typography>
                  ))}
                </ul>
              </CardContent>
              <CardActions>
                <MaterialButton
                  fullWidth
                  variant={tier.buttonVariant}
                  style={{ backgroundColor: "#032E54", color: "#FFFFFF" }}
                >
                  {tier.buttonText}
                </MaterialButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </MaterialContainer>
    {/**Material Pricing End*/}

    {/**Blog*/}
    <MaterialCard sx={{ padding: 1 }}>
      <Box sx={{ position: "relative" }}>
        <CardMedia component="img" image={blog} />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "100%",
            padding: "50px",
            color: "#FFFFFF",
          }}
        >
          <Typography variant="h2">Keep posted with our blog!</Typography>
          <Typography variant="body2">
            Quam elementum pulvinar etiam non quam lacus suspendisse. Duis at
            tellus at urna condimentum mattis pellentesque. Pharetra et ultrices
            neque ornare aenean euismod.
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1.5, width: "35ch" },
            }}
            noValidate
            autoComplete="off"
            color="#FFFFFF"
          >
            <TextField
              id="email"
              label="Type your email"
              color="primary"
              focused
            />
            <MaterialButton
              id="subscribeButton"
              style={{ backgroundColor: "#036AC3", color: "#FFFFFF" }}
            >
              Subscribe
            </MaterialButton>
          </Box>
        </Box>
      </Box>
    </MaterialCard>

    <BottomNavigation showLabels align="left">
      <Typography
        variant="h6"
        color="inherit"
        noWrap
        sx={{ m: 1 }}
        align="left"
      >
        <img noWrap sx={{ flexGrow: 1 }} src={footerLogo} alt="logo"></img>
      </Typography>
      <Typography
        variant="h6"
        color="inherit"
        noWrap
        sx={{ m: 1, mt: 2.1, ml: 0 }}
        variant="caption"
      >
        @All Rights Reserved.
      </Typography>
      <BottomNavigationAction label="Company" icon={<footerLogo />} />
      <BottomNavigationAction label="Contact" />
      <BottomNavigationAction label="Legal Mentioins" />
      <BottomNavigationAction icon={<FacebookIcon />} />
      <BottomNavigationAction icon={<TwitterIcon />} />
      <BottomNavigationAction icon={<InstagramIcon />} />
    </BottomNavigation>
  </div>
);

export default Home;
