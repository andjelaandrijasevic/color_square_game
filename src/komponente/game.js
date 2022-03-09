import React, { useState } from 'react';
import Button from './Button';
import './game.css'
var  br_tacno_izabranih=0;
var br_pogresno_izabranih=0;
var br_tacnih=0;
var br_pogresnih=0;
const Game = (props) => {

    const [clickedSquare,setClickedSquare]=useState([]);
   const [statusGame,setStatusGame]=useState('beforeGame');
   
    
   const setClickedSquareFunc =(num)=>{
     if(statusGame==='done' || statusGame==='startGame'){
       return;}
      else if(!clickedSquare.includes(num))
      {
        setClickedSquare(clickedSquare.concat(num));
  
        if(props.randomNums.includes(num))
        {
          br_tacno_izabranih++;
          if(br_tacno_izabranih===6)
          {
           // br_tacnih=br_tacno_izabranih;
           setStatusGame('done');
            
           
          }
          console.log(statusGame);
          console.log(br_tacno_izabranih);
          
        }
        else if(!props.randomNums.includes(num))
        {
          br_pogresno_izabranih++;
          if(br_pogresno_izabranih===3)
           {
             //br_pogresnih=br_pogresno_izabranih;
             setStatusGame('done');
            
           }
           console.log(statusGame);
          console.log(br_pogresno_izabranih);
        }
      }

     
    
     
   }
    function returnColor(number)
    {
      if(statusGame==='inGame'|| statusGame==='done')
      {
      //ako dugme nije kliknuto ono je sive boje
      if(!clickedSquare.includes(number))
      {
        return 'gray';
      }
      //ako je kliknuto ispravno zeleno je,ako je kliknuto pogresno crveno je
      else if(props.randomNums.includes(number))
      {
          
          
          return 'green';
      }
          else return 'red';
    }
    else if(statusGame==='startGame')
    {
      if(!props.randomNums.includes(number))
      {
        return 'gray';
      }
      else return 'blue';
    }
    else if(statusGame==='beforeGame')
    {
      return 'gray';
    }
    
  }

function onClickStart()
{
  setStatusGame('startGame');
  br_tacno_izabranih=0;
  br_pogresno_izabranih=0;
}

if(statusGame==='startGame'){
  setTimeout(() => {
   setStatusGame('inGame');
  }, 3000);
}



    return(
        <div>
      <div className='div_square' style={{border:"black solid 0.3px"}}> 
         { 
         utils.range(1,16).map(number=> 
        <Button onClick={setClickedSquareFunc} randomNums={props.randomNums} broj={number}  key={number} colored={returnColor(number)}/>
         )
            }
          </div>  
          <button style={{visibility:statusGame==='beforeGame'? "visible":"hidden"}} onClick={ onClickStart}>Start</button>
          <p>{(br_pogresno_izabranih===3 && statusGame==='done') ?'You are lost' : (br_tacno_izabranih===6 && statusGame==='done') ? 'You are won' : ''}</p> 
          <button style={{visibility:statusGame==='done'? "visible":"hidden"}} onClick={props.startNewGame}>Play again</button>
        </div>
    )
   
          }

// Math science
const utils = {
    // Sum an array
    sum: arr => arr.reduce((acc, curr) => acc + curr, 0),
  
    // create an array of numbers between min and max (edges included)
    range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),
  
    // pick a random number between min and max (edges included)
    random: (min, max) => min + Math.floor(Math.random() * (max - min + 1)),
  
    // Given an array of numbers and a max...
    // Pick a random sum (< max) from the set of all available sums in arr
    randomSumIn: (arr, max) => {
      const sets = [[]];
      const sums = [];
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0, len = sets.length; j < len; j++) {
          const candidateSet = sets[j].concat(arr[i]);
          const candidateSum = utils.sum(candidateSet);
          if (candidateSum <= max) {
            sets.push(candidateSet);
            sums.push(candidateSum);
          }
        }
      }
      return sums[utils.random(0, sums.length - 1)];
    },
  };
export default Game;