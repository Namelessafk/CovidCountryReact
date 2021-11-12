import React, { useState, useEffect } from "react";
import './App.css';
import axios from 'axios';

const url = 'http://localhost:3004/contato';    

function App() {
/*function App() {
    useEffect(() => {
        axios.get('http://localhost:3004/contato')
        .then((response) => {
        console.log(response.data)
         });     
    },[] );
*/    


    const[loading,setLoading] = useState(true);
    const[countrys,setCountrys] = useState([]);
    
    const FetchCountrys = async () =>{
        const response = await fetch(url)
        const newCountry = await response.json();
        setCountrys(newCountry)
        setLoading(false)

    };

    useEffect(( )=> {
        FetchCountrys();
    }, []); //vai executar apenas uma vez
    console.log()

    if(loading){
        return <section className="section loading">
            <h1>loading...</h1>
        </section>

    }
    
    
    
    
  
  return ( 
    <>   
        <h2>tabs project setup </h2>
        

    </> 
  );
};
export default App;
