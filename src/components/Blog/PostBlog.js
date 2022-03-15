import React, { useState } from "react";
import { Box, Button, Container, Grid } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import Footer from "../Footer/Footer";
import database from "../firedb";
import "./PostBlog.css";
const PostBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleOnClick = () => {
    const setTodo = database.ref("Blog");
    const BlogData = {
      id: uuidv4(),
      title: title,
      content: content,
      date: date,
      keyword: keyword,
    };
    console.log(BlogData);
    setTodo.push(BlogData);
  };

  /* Note: if user fill the contact form his/her details will be stored in firebase data base. Collection name is Blog. */
  return (
    <div className="postBlog-main-container">
      <Container maxWidth="lg" style={{ height: "100vh" }}>
        <Box
          style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Box
              className="signUp-form"
              style={{
                maxWidth: "320px",
                marginTop: "40px",
                textAlign: "right",
              }}
            >
              <input
                type="text"
                required
                id="title"
                name="title"
                placeholder="Your Blog Title"
                className="common-input-field name-field"
                onChange={(e) => setTitle(e.target.value)}
              />
              <input
                type="text"
                required
                id="content"
                name="content"
                placeholder="Your Blog Content"
                className="common-input-field email-field "
                onChange={(e) => setContent(e.target.value)}
              />
              <input
                type="text"
                id="date"
                name="date"
                placeholder="DD/MM/YY"
                className="common-input-field phone-field "
                onChange={(e) => setDate(e.target.value)}
              />
              <input
                type="text"
                id="keyword"
                name="keyword"
                placeholder="Your Blog Keywords"
                className="common-input-field phone-field "
                onChange={(e) => setKeyword(e.target.value)}
              />

              <Button
                type="submit"
                variant="contained"
                className="postBlog-button"
                onClick={handleOnClick}
              >
                POST
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default PostBlog;
