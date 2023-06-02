import React from 'react'

const Content = ({content}) => {
  return (
    
    
     <ul>
        {
          content.map(item => (
            <li style={{padding: 10}} key={item.id}>
              {JSON.stringify(item)}
            </li>
          ))
        }
      </ul>
   
  )
}

export default Content