import './App.css'
import Header from './component/Heaader/Header'
import Blogs from './component/Blogs.jsx/Blogs'
import Bookmarks from './component/BooksMarks/Bookmarks'

function App() {
  

  return (
    <>
     <Header></Header>
     <div className='md:flex'>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     </div>
    </>
  )
}

export default App
