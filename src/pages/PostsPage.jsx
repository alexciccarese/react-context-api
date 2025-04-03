import { useContext } from "react";
import PostContext from "../contexts/PostContext";
import PostsList from "../components/PostsList";

const api_url = 'http://localhost:3003'



export default function PostsPage() {

  const { posts } = useContext(PostContext)

  return (

    <>
      <main>
        <div className="container py-5">
          <h1 className="display-5 fw-bold mb-4">Tutti i nostri dolci</h1>

          <PostsList posts={posts} />
        </div>
      </main>

    </>
  )
}