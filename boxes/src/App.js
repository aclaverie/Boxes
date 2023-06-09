import './App.css';
import boxes from './components/BoxesData';
import Square from './components/Square';
import { useState } from 'react';

function App() {
  const [boxArray, setBoxArray] = useState(boxes);

  function toggle(id){
    //Two methods one declaritive and the other imperative
    //the code commented out is very imperative.
    //However React really adheres to writing Declaritive code
    //
    // setBoxArray((prevArray)=>{
      //Imperative Code
      // const newSquares = [];
      // for(let i=0;i<prevArray.length; i++){
      //   const currentSq = prevArray[i];
      //   if(currentSq.id===id){
      //     const updateSq = {
      //       ...currentSq,
      //       on: !currentSq.on
      //     }
      //     newSquares.push(updateSq)
      //   }else {
      //     newSquares.push(currentSq)
      //   }
      // }
      // return ( [...newSquares] );
    // })

    // React more declaritive
    setBoxArray(prevArray => {
      return prevArray.map((square)=>{
        return square.id===id ? {...prevArray, on: !square.on} : square;
      })
    })
  }

  const squareElements = boxArray.map((box)=>{
    return(
      <Square 
      key={box.id}
      on={box.on} 
      handleClick={()=>toggle(box.id)}
        />
  )})
  
  
  return (
    <div className="App">
      <header className="App-header">
      <div className="head-left">
        <div className="head-logo">
          <img src={ process.env.PUBLIC_URL + 'static/images/boxes_logo.jfif'}
                alt="Meme Generator Logo" width="46px" />
        </div>
        <div className="App-title">
          Boxes
        </div>
      </div>
      <div className="head-right">
        React Project - 4
      </div>
      </header>
      <main className='container' >
        {squareElements}
      </main>
      <div className="App-footer">
        <div className="footer-info">
          Powered By React!
        </div>
      </div>
    </div>
  );
}

export default App;
