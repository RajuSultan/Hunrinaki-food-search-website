import React, { useState } from 'react';
import './Selected.css'

const Selected = (props) => {
    let items = props.choosen;



    const [bestOne, setBestOne] = useState([]);
    // function clear() {
    //     items = [];

    // }
    // if (!items) {
    //         return Selected;

    //     }


    function random(items) {
        const item = items[Math.floor(Math.random() * items.length)];
        setBestOne(item);

    }



    return (
        <div className='main'>
            <h1>Selected Items</h1>
            <hr />
            {
                items.map(item => <p>{item.name}</p>)
            }
            <button className='btn-1' onClick={() => random(items)} >Choose 1 For Me</button><br />
            <h2> Your Best One:{bestOne.name}</h2>
            <button className="btn-2" /* onClick={() => clear()} */>CHOOSE AGIAN</button>


        </div>
    );
};

export default Selected;