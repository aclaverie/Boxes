import React from 'react';
import Square from './Square';

function Main(props){
    // console.log(props.bArray[0].id);
    const sqDisplay = props.bArray.map((box) => {
        return (
            <div key={box.id} className="square">
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