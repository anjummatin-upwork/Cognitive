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
import overview from "../Files/overview.png";
import overview2 from "../Files/overview2.png";
import overview3 from "../Files/overview3.png";
import "./overview.css";
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

const Overview = () => (
  <div>
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={overview} />
        <Carousel.Caption className="carousel-caption-first">
          <h1 className="carouselHeader">Your DNA report</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.{" "}
          </p>
        </Carousel.Caption>
        <Carousel.Caption className="carousel-caption-second">
          <ButtonGroup className="me-2">
            <Button variant="getYourReportCarousel" href={ROUTES.GetYourReport}>
              Get your report
            </Button>
          </ButtonGroup>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

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
    <div className="card mb-3" style={{ width: "100%" }}>
      <div className="row no-gutters">
        <div className="col-md-6">
          <img src={overview2}></img>
        </div>
        <div className="col-md-5">
          <div className="card-body">
            <h5 className="card-title">Lorem Ipsum</h5>
            <p className="card-text">
              Cursus in hac habitasse platea dictumst quisque sagittis purus.
              Tortor consequat id porta nibh venenatis cras sed felis eget. Dis
              parturient montes nascetur ridiculus. Cursus in hac habitasse
              platea dictumst quisque sagittis purus. Tortor consequat id porta
              nibh venenatis cras sed felis eget. Dis parturient montes nascetur
              ridiculus. Cursus in hac habitasse platea dictumst quisque
              sagittis purus. Tortor consequat id porta nibh venenatis cras sed
              felis eget. Dis parturient montes nascetur ridiculus. Cursus in
              hac habitasse platea dictumst quisque sagittis purus. Tortor
              consequat id porta nibh venenatis cras sed felis eget. Dis
              parturient montes nascetur ridiculus.
            </p>
          </div>
        </div>
      </div>
    </div>

    <Card className="text-center">
      <Card.Body>
        <Card.Img src={line1} />
      </Card.Body>
    </Card>

    <Card className="text-center">
      <Card.Body>
        <Card.Title>
          <h2>How it works</h2>
        </Card.Title>
        <Card.Img variant="line" src={line} />
      </Card.Body>
    </Card>
    <div className="card mb-3" style={{ width: "100%" }}>
      <div className="row no-gutters">
        <div className="col-md-6">
          <div className="card-body">
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <p className="card-text">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/*Overview3 Content*/}
    <Card className="text-white">
      <Card.Img src={overview3} alt="Card image" />
    </Card>

    <Card className="text-center">
      <Card.Body>
        <Card.Img src={line1} />
      </Card.Body>
    </Card>

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

export default Overview;