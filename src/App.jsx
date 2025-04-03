import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PostContext from './contexts/PostContext'
import PostsPage from "./pages/PostsPage"

const api_url = 'http://localhost:3003'


export default function App() {
  const [posts, setPost] = useState([])

  useEffect(() => {
    fetchData(`${api_url}/posts`)

  }, [])

  function fetchData(url) {

    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPost(data)
      })
  }

  return (

    <>
      <PostContext.Provider value={{ posts: posts }}>
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" Component={PostsPage}/>
            </Route>
          </Routes>
        </BrowserRouter>

      </PostContext.Provider>
    </>
  )
}