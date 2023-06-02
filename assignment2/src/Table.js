import React from 'react'
import Row from './Row'

const Table = ({content}) => {
  return (
    <table className="zigzag">
        <tbody>
            {
                content.map( item=> (
                    <Row key={item.id} item={item} />
                 ) )
            }
        </tbody>
    </table>
  )
}

export default Table