
import './index.css'
import Square from './Square';
import { useState } from 'react';
import Input from './Input';

function App() {
const [color, setColor] = useState('');
const [hexValue, setHexValue] = useState('')
const [isDark, setIsDark] = useState(true);

  return (
    <div className="App">
      
        <Square
          color={color}
          hexValue={hexValue}
          isDark={isDark}
        />
        <Input
          color={color}
          setColor={setColor}
          isDark={isDark}
          setIsDark={setIsDark}
          setHexValue={setHexValue}
        />
       
     
    </div>
  );
}

export default App;
