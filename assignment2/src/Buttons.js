import React from 'react'
import MyButton from './MyButton'

const Buttons = ({reqType, setReqType}) => {
  return (
    
    <>
       <MyButton
          buttonText="users"
          reqType={reqType}
          setReqType={setReqType}
       />
       <MyButton
          buttonText="posts"
          reqType={reqType}
          setReqType={setReqType}
       />
       <MyButton
          buttonText="comments"
          reqType={reqType}
          setReqType={setReqType}
       />
    </>
  )
}

export default Buttons