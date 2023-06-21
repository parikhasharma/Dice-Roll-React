import React from 'react'
import './components.css'



export default function Square({value,freeze}){
    
    
    return(
        <div >
         <button className='square' onClick={freeze} >{value}</button>  
        </div>
    )
}