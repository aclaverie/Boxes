import React from 'react';
import Square from './Square';

function Main({ bArray, HandleClick }){
    // console.log(bArray);

    const sqDisplay = bArray.map(bArr => {
        
        let filled = null;
        let boxId = null;
        // console.log(bArr);
        filled = (bArr.on) ? "square fill": "square";
        // console.log("Now it is: "+filled);
        boxId = bArr.id;
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