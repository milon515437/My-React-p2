import React, { useState } from 'react';
import './App.css';
import Header from './component/Heaader/Header';
import Blogs from './component/Blogs.jsx/Blogs';
import Bookmarks from './component/BooksMarks/Bookmarks';

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) => {
    // Update the bookmarks state with the new blog
    setBookmarks((prevBookmarks) => [...prevBookmarks, blog]);
    const newBookMarks = [...bookmarks, blog];
    setBookmarks(newBookMarks);
  };

  return (
    <>
      <Header />
      <div className='md:flex max-w-7xl mx-auto'>
        {/* Pass the handleAddToBookmark function to Blogs component */}
        <Blogs handleAddToBookmark={handleAddToBookmark} />
        {/* Pass the bookmarks state to Bookmarks component */}
        <Bookmarks bookmarks={bookmarks} />
      </div>
    </>
  );
}

export default App;
