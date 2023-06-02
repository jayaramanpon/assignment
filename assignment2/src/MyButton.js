import React from 'react'

const MyButton = ({buttonText, reqType, setReqType}) => {
  return (
    <button className= {reqType === buttonText ? "selected": null} onClick={ () => {setReqType(buttonText)} } 
    type="button">{buttonText.toUpperCase()}</button>
  )
}

export default MyButton