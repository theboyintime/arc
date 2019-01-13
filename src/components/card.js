import React from 'react'
import './card.css'

{/*
    const Card = props => (
   <div className="card">

   {/* Intialize title and text from card comp in index.js 
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </div>
)

export default Card
    */}


const Card = props => (
    <div className="card">
     <div className='cardTitle'>
        <h4>{props.title}</h4>
     </div>
     <div className="cardContent">
        <input className="keyword" type="text" placeholder="Enter search parameter"></input>
        <br></br>
        <input className="keyword" type="text" placeholder="Enter search parameter"></input>
        <br></br>
        <input className="keyword" type="text" placeholder="Enter search parameter"></input>
     </div>
    </div> 
 )
 
 export default Card
