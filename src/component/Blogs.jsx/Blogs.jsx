import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('/digital.json')
            .then(res => res.json())  // Corrected: Invoke json() method
            .then(data => setBlogs(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {/* Add code to render the blog data as needed */}
        </div>
    );
};

export default Blogs;
