import './game.css';
import React from 'react';
const Button = (props) => {
    return (
        <div style={{height:"80px",width:"80px",border:"none"}} >
            <button className="square"  style={{backgroundColor: props.colored,border:"black solid 0.3px"}}
            onClick={()=>props.onClick(props.broj)}
            ></button>
        </div>
      );
}

export default Button;