import React, { useState } from "react";
import './App.css';


function App() {
  
    const [message, setMessage] = useState('HelloWorld')
  
  
  return ( 
    <>   
        <div className="container">{message}</div>
        <button onClick={() => setMessage ("helloooooo")} >
            mudar mensagem
        </button>
            
        

    </> 
  );
};
export default App;
