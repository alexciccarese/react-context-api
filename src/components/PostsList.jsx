import { useContext } from "react";
import PostContext from "../contexts/PostContext";
import PostCard from "./PostCard";

export default function PostsList() {
  const { posts } = useContext(PostContext)



  return (

    <>
      <div className="row">

        {posts.map(post => (
          <div className="col" key={`post-${post.id}`}>

            <PostCard post={post} />

          </div>
        ))}
      </div>
    </>
  )
}