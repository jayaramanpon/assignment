
import Buttons from './Buttons';
import Content from './Content';
import { useState } from 'react';
import './index.css'
import { useEffect } from 'react';


function App() {

  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [content, setContent] = useState([]);
  const [reqType, setReqType] = useState('users')
  
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const result = await fetch(`${API_URL}${reqType}`)
        const json = await result.json();
        return json;
      } catch(err) {
        console.log(err)
      }
    }
    
    (async () => fetchItems())().then(json => setContent(json))
    
  }, [reqType]);

  return (
    <div>
      <Buttons 
        setReqType={setReqType}
      />
      <Content 
        content = {content}
      />
    </div>
  );
}

export default App;
