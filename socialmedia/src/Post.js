import React from 'react'
import {useParams} from 'react-router-dom'
import { Link, Outlet } from 'react-router-dom'

const Post = ({post}) => {
    
  const {id} = useParams()
  return (
    <article className='post'>
        <Link to={`postpage/${post.id}`}>{post.title}</Link>
        <p className='postDate'>{post.datetime}</p>
        <p className='postBody'>
            {
                (post.body).length <= 25
                ? post.body 
                : `${(post.body).slice(0,25)}...`
            }
        </p>
    </article>
  )
}

export default Post