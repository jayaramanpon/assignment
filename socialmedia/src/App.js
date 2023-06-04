import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import NewPost from './NewPost'
import PostPage from './PostPage'
import About from './About'
import Missing from './Missing'
import Footer from './Footer'
import Post from './Post';
import PostLayout from './PostLayout';
import { useState, useEffect} from 'react';
import {format} from 'date-fns';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
      datetime: "July 1",
      body: "First call"
    },
    {
      id: 2,
      title: "Second Post",
      datetime: "July 2",
      body: "Second call"
    },
    {
      id: 3,
      title: "Third Post",
      datetime: "July 3",
      body: "Third call"
    },
    {
      id: 4,
      title: "Fourth Post",
      datetime: "July 4",
      body: "Fourth call"
    }
  ])

  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const navigate = useNavigate();

  useEffect(()=> {
    const filteredSerachResults = posts.filter(
      (post) => 
      ((post.body).toLowerCase().includes(search.toLowerCase())
      ||
      (post.title).toLowerCase().includes(search.toLowerCase()))
    );
    setSearchResults(filteredSerachResults.reverse())
  }, [posts, search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {
      id, 
      title: postTitle,
      datetime,
      body: postBody
    };
    const allPost = [...posts, newPost];
    setPosts(allPost)
    setPostTitle('')
    setPostBody('')
    navigate('/')
  }

  const handelDelete = (id) => {
    const postsss = posts.filter(post => post.id != id);
    setPosts(postsss)
    navigate('/')
  }

  return (
    <div className="App">

      <Header />
      <Nav search={search} setSearch={setSearch}/>
      <Routes>
        <Route path='/' element={<Home posts={searchResults}/>} />
        <Route path='/about' element={<About />} />
        <Route path='/post'> 

          <Route index element={<NewPost 
          handleSubmit={handleSubmit}
          postTitle={postTitle}
          setPostTitle={setPostTitle}
          postBody={postBody}
          setPostBody={setPostBody}/>} />

        </Route>
        <Route path='/postpage' >
          <Route index element={<PostPage posts={posts}/>} />
          <Route path=':id' element={<PostPage posts={posts} handleDelete={handelDelete}/>} />
          <Route path='newpost' element={<NewPost 
          handleSubmit={handleSubmit}
          postTitle={postTitle}
          setPostTitle={setPostTitle}
          postBody={postBody}
          setPostBody={setPostBody}/>} />
        </Route>
        <Route path='*' element={<Missing />} />
      </Routes>
  
      <Footer />
  
    </div>
  );
}

export default App;
