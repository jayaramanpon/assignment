import React from 'react'

const NewPost = ({handleSubmit,postTitle, setPostTitle,postBody,setPostBody}) => {
  return (
    <main>
    <h2>NewPost</h2>
    <form id="newFormPost" onSubmit={handleSubmit}>
      <label htmlFor='postTitle'>Title:</label>
      <input 
        id="postTitle"
        type='text'
        required
        postTitle={postTitle}
        setPostTitle={setPostTitle}
        onChange={(e)=> setPostTitle(e.target.value)}
      />
      <br></br>
      <label htmlFor='postBody'>PostBody:</label>
      <textarea 
        id="postBody"
        required
        value={postBody}
        onChange={(e) => setPostBody(e.target.value)}
      />
      <br></br>
      <button type='submot'>Submit</button>
    </form>
  </main>
  )
}

export default NewPost