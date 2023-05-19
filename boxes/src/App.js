import './App.css';
import Main from './components/Main';
import boxes from './components/BoxesData';
import { useState } from 'react';

function App() {

  const [boxArray, setBoxArray] = useState(boxes);
  const [boxClicked, setBoxClicked] = useState(null);
  const [stArray, setFutureArray] = useState(null);

  function handleClick(e){
    setBoxClicked(e.target.id);
    setBoxArray(prevBoxes => {
      for(let y=0;y<prevBoxes.length;y++)
      {
        if(prevBoxes[y].id === boxClicked){
          prevBoxes[y].on = !prevBoxes[y].on;
        }
        setFutureArray([prevBoxes[y]]);
      }
      return ([stArray])
    })
    console.log(boxClicked);
  }

 

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
      
      <Main bArray={boxArray} HandleClick={handleClick} />

      <div className="App-footer">
        <div className="footer-info">
          Powered By React!
        </div>
      </div>
    </div>
  );
}

export default App;
