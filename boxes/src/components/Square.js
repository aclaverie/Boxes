import React from 'react';

function Square(props){
    const styles={
        backgroundColor: props.on ? "#FFEB4F" : "transparent"
    }

    return (
        <div 
        className="square" 
        style={styles} 
        onClick={()=>{props.handleClick(props.id)}}></div>
    )
}

export default Square;