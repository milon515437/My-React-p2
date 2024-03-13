import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import propTypes from 'prop-types';
const Blogs = ({handleAddToBookmark}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/digital.json')
            .then(res => res.json()) 
            .then(data => setBlogs(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog =>
                     <Blog
                     key={blog.id} blog={blog}
                     handleAddToBookmark={handleAddToBookmark}
                    
                    ></Blog>)
            }
            
        </div>
    );
};

export default Blogs;
Blogs.propTypes = {
    handleAddToBookmark:propTypes.func
} 