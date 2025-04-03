import { useContext } from "react";
import PostContext from "../contexts/PostContext";

const api_url = 'http://localhost:3003'

export default function PostsList() {
  const { posts } = useContext(PostContext)



  return (

    <>
      <div className="row">

        {posts.map(post => (
          <div className="col" key={`post-${post.id}`}>

            {/* add card here */}
            <div className="card">
              <img className="card-img-top" src={api_url + post.image} alt={post.title} />
              <div className="card-body">
                {post.title}
              </div>
            </div>

          </div>
        ))}
      </div>
    </>
  )
}