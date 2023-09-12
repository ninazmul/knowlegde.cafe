import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(response => response.json())
        .then(json => setBlogs(json))


    },[])

    return (
        <div>
            
        </div>
    );
};

export default Blogs;