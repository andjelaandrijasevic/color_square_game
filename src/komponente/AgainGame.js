import { useState } from "react";
import Game from "./game";
const AgainGame = () => {
    
  const [gameId,setGameId]=useState(1);
    var coloredSquareNum=[];
    while(coloredSquareNum.length<6)
    {
        var num=utils.random(1,16);
        if(!coloredSquareNum.includes(num))
        {
            coloredSquareNum.push(num);
        }
    }
    
    return<Game randomNums={coloredSquareNum} key={gameId} startNewGame={()=>{setGameId(gameId+1);}} />;
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
export default AgainGame;