const api_url = 'http://localhost:3003'


export default function PostCard({post}) {

  return (
    <>
      <div className="card">
        <img className="card-img-top" src={api_url + post.image} alt={post.title} />
        <div className="card-body">
          {post.title}
        </div>
      </div>
    </>
  )
}