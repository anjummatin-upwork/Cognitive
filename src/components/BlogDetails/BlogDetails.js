import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Container,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import database from "../firedb";
import footerLogo from "../Files/footer1.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./BlogDetails.css";
const BlogDetails = () => {
  const { blogId } = useParams();
  const [blogs, setBlogs] = useState([]);
  // get method start
  useEffect(() => {
    const blogRef = database.ref("Blog");
    blogRef.on("value", (snapshot) => {
      const blogs = snapshot.val();

      setBlogs(blogs);
    });
  }, []);
  const matchedBlog = blogs.find((blog) => blog.id == blogId);

  return (
    <div className="blogDetails-main-container">
      <Container maxWidth="md" className="blog-inner-container">
        <Typography variant="body2" className="blog-details-date">
          {matchedBlog?.date}
        </Typography>
        <Box>
          <Typography variant="h4" className="blog-details-heading">
            {matchedBlog?.title}
          </Typography>
          <Typography variant="body1">{matchedBlog?.content}</Typography>
        </Box>
        <Box className="horizontal-line"></Box>
        <Box className="read-more-return-to-blog-container">
          <Typography variant="caption" className="read-more-text">
            Read more about
            <Typography variant="caption" className="category-name">
              {matchedBlog?.keyword}
            </Typography>
          </Typography>
          <Typography variant="body2" className="return-to-blog-wrapper">
            <Link to="/Blog" className="return-to-blog-link">
              Return to Blog
            </Link>
          </Typography>
        </Box>
      </Container>

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
};

export default BlogDetails;
