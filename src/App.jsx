import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import './App.css'
import Bookmarks from './Bookmarks/Bookmarks';
import { useState } from 'react';


function App() {
 
  const [bookmarks, setBookmarks] = useState([]);

  const [readingTimes, setReadingTimes] = useState(0);

  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  const handleMarkedAsRead = (id, time) =>{
    const newReadingTimes =readingTimes + time;
    setReadingTimes(newReadingTimes);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      <Header></Header>
      <main className="md:flex px-2 gap-8 max-w-7xl mx-auto">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkedAsRead={handleMarkedAsRead}></Blogs>
        <Bookmarks
          bookmarks={bookmarks}
          readingTimes={readingTimes}></Bookmarks>
      </main>
    </>
  );
}

export default App
