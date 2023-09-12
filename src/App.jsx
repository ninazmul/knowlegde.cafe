import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import './App.css'
import Bookmarks from './Bookmarks/Bookmarks';

function App() {
 

  return (
    <>
      <Header></Header>
      <main className='md:flex mx-4 px-2 items-center'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </>
  );
}

export default App
