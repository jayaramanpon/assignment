import React from 'react'
import colornames from 'colornames'

const Input = ({color, setColor, isDark, setIsDark, setHexValue}) => {
  return (
    <div>
        <input 
        value={color}
        onChange={
            (e)=> {
            setColor(e.target.value);        
            setHexValue(colornames(e.target.value));
            }
        }
        type='text' placeholder='color name'/>
        <button 
        onClick={(e)=>setIsDark(!isDark)}
        type='text'>toggle color</button>
    </div>
  )
}

export default Input