import React,{useState} from 'react'
import Square from './square'

export function Board(){
     const [square,setsquare]=useState(Array(9).fill(null));
     var arr=Array(9).fill(0);
     const boardRef = React.useRef(Array(9).fill(false));
    function handleClick(){
        for(let i=0;i<9;i++){
            let data=0;
            if(boardRef.current[i]===true){
                data=square[i];
            }else{
                data=Math.floor(Math.random()*7);
                if(data===0){
                    data=data+1;
                }
            } 
            arr[i]=data;
            
        }
        setsquare(arr)
    }

    function freeze(i){
        const newVal=true;
        boardRef.current[i]=newVal;
    }

    return(
         <div> 
         <button onClick={handleClick}>Roll Dice</button>
         <div>
         {
            square.map((data,index)=>{
                return(
                    <Square value={data} freeze={()=>{freeze(index)}}/>
                )
            })
         } 
         </div>  
         </div>
    )
}


