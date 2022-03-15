import {
  Box,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@material-ui/core";
import MaterialButton from "@mui/material/Button";

import React from "react";
import { useHistory } from "react-router-dom";
import StarIcon from "@mui/icons-material/StarBorder";
const Service = (props) => {
  const { title, period, price, data, id } = props.sub || {};

  const history = useHistory();

  return (
    <Grid item spacing={24} md={4}>
      <CardHeader
        title={title}
        subheader=""
        titleTypographyProps={{ align: "center" }}
        action={title === "Pro" ? <StarIcon /> : null}
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
            ${price}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {period}
          </Typography>
        </Box>
        <ul>
          {/* {data.map((line) => ( */}
          <Typography component="li" variant="subtitle1" align="center">
            {data}
          </Typography>
          {/* ))} */}
        </ul>
      </CardContent>
      <CardActions>
        <MaterialButton
          onClick={() => history.push(`/ServiceDetails/${id}`)}
          fullWidth
          variant="outlined"
          style={{ backgroundColor: "#032E54", color: "#FFFFFF" }}
        >
          Get this plan
        </MaterialButton>
      </CardActions>
    </Grid>
  );
};

export default Service;
