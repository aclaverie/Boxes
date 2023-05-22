import React from 'react';

function Square(props){
    const styles={
        backgroundColor: props.on ? "#FFEB4F" : "transparent"
    }

    //In the onClick you can use this method of an anonymos function
    //     onClick={()=>{props.handleClick(props.id)}}></div>     
    //passing. In the id or use a closure
    return (
        <div 
        className="square" 
        style={styles} 
        onClick={props.handleClick}
        />
    )
}

export default Square;