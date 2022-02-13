import React, { useEffect, useState } from "react";
import "./blog.css";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Container, Typography, Grid, Box } from "@material-ui/core";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import database from "../firedb";
import { useHistory } from "react-router-dom";

const Blog = () => {
  const [uniqueCategory, setUniqueCategory] = useState([]);
  const [checked, setChecked] = React.useState([]);
  const [blogs, setBlogs] = useState([]);
  const [uiBlogs, setUiBlogs] = useState([]);
  const history = useHistory();

  const handleOnChange = (e) => {
    const isChecked = e.target.checked;
    if (!isChecked) {
      const newKeyword = checked.filter((item) => item != e.target.value);
      setChecked(newKeyword);
    } else {
      const newKeyword = [...checked, e.target.value];
      setChecked(newKeyword);
    }
  };

  useEffect(() => {
    const blogDetails = [];
    if (checked.length > 0) {
      checked.forEach((blog) => {
        const item = blogs.find((blg) => blg.keyword === blog);
        blogDetails.push(item);
      });
      setUiBlogs(blogDetails);
    } else {
      setUiBlogs(blogs);
    }
  }, [checked.length, blogs.length]);

  useEffect(() => {
    const categories = [];
    blogs.forEach((blog) => {
      const isExist = categories.includes(blog.keyword);
      if (!isExist) {
        categories.push(blog.keyword);
      }
    });
    setUniqueCategory(categories);
  }, [blogs.length]);

  // get method start

  useEffect(() => {
    const blogRef = database.ref("Blog");
    blogRef.on("value", (snapshot) => {
      const blogs = snapshot.val();
      setBlogs(blogs);
    });
  }, []);

  //handle show blog details

  const handleShowBlogDetails = (id) => {
    history.push(`/blogDetails/${id}`);
  };
  return (
    <>
      {" "}
      <Box className="blog-main-container">
        <Container maxWidth="md" className="blog-main-container">
          <Typography variant="h3" className="blog-top-heading">
            Genetically Blog
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={9}>
              <Typography
                variant="body1"
                className="blog-top-short-description"
              >
                Quam elementum pulvinar etiam non quam lacus suspendisse.
                Pharetra et ultrices neque ornare subscribe here.
              </Typography>

              {uiBlogs.map((blog, index) => {
                const { id, title, content, date, keyword } = blog;
                return (
                  <Box className="blog-container" key={id}>
                    <Box display="flex" justifyContent="space-between">
                      <Box display="flex">
                        <Typography variant="body2" className="category-tag">
                          {keyword}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="body2" className="category-tag">
                          {" "}
                          {date}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="end"
                    >
                      <Box className="blog-article-left-part blog-article-part">
                        <Typography
                          variant="h5"
                          className="blog-article-heading"
                        >
                          {title}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="blog-article-description"
                        >
                          {content.slice(0, 300) + "..."}
                        </Typography>
                      </Box>
                      <Box className="blog-article-right-part blog-article-part">
                        <Button
                          variant="contained"
                          size="small"
                          onClick={() => {
                            handleShowBlogDetails(id);
                          }}
                        >
                          Reade More
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="h5"> Filter by categories</Typography>
              <Box>
                <Box>
                  {uniqueCategory.map((value, index) => {
                    return (
                      <Box>
                        <label for="vehicle2">
                          <input
                            onChange={(e) => {
                              handleOnChange(e);
                            }}
                            type="checkbox"
                            id="vehicle2"
                            name="vehicle2"
                            value={value}
                          />
                          {value}
                        </label>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Blog;
