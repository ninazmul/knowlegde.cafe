import { useEffect, useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddToBookmark, handleMarkedAsRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((json) => setBlogs(json));
  }, []);

  return (
    <div className="md:w-2/3 ">
      <h2 className="text-4xl font-bold py-4">Blogs: {blogs.length}</h2>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleAddToBookmark={handleAddToBookmark}
          handleMarkedAsRead={handleMarkedAsRead}></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookmark: PropTypes.func,
  handleMarkedAsRead: PropTypes.func
};

export default Blogs;