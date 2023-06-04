import React from 'react'
import {useParams, Link } from 'react-router-dom'

const PostPage = ({posts, handleDelete}) => {

  const {id } = useParams();
  const post = posts.find(post => (post.id).toString() === id);
  return (
    <main className='PostPage'> 
      <article>
        {
          post && 
          <>
            <h2>{post.title}</h2>
            <p>{post.datetime}</p>
            <p>{post.body}</p>
            <button onClick={(e)=> handleDelete(post.id)}>
              Delete Post
            </button>
          </>
        }
        {
          !post && 
            <>             
                <h2>Page not found</h2>
                <p>Well, that's disappointing</p>
                <p> 
                  <Link to="/">Visit Our Homepage</Link>
                </p>              
            </>
        }
      </article>
    </main>
  )
}

export default PostPage
