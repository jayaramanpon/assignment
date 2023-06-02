import React from 'react'

const Square = ({color, hexValue, isDark}) => {
  return (
    <section className='square' style={{backgroundColor: color}}>
    <p style={{color: isDark ? "#000" : "#FFF"}}>{color}</p>
    <p style={{color: isDark ? "#000" : "#FFF"}}>{hexValue ? hexValue : null}</p>
  </section>
  )
}

Square.defaultProps = {
    color: "No color to display"
}

export default Square