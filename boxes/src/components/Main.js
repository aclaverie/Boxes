import React from 'react';
import Square from './Square';

function Main({ bArray, HandleClick }){
    console.log(bArray);

    const sqDisplay = bArray.map(box => {
        let filled = (box.on) ? "square fill": "square";
        let boxId = box.id;
        return (
            <div key={boxId} id={boxId} className={filled} onClick={HandleClick} >
                <Square />
            </div>
        );
    });

    return(
        <main className='container' >
            {sqDisplay}
        </main>
    );
}

export default Main;