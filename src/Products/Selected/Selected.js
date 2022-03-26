import React, { useState } from 'react';
import './Selected.css'

const Selected = (props) => {
    let items = props.choosen;
    let newItems = [...items];
    const [bestOne, setBestOne] = useState([]);
    function random(items) {
        if (items.length === 0) {
            alert("You don't have seleted item, add something");

        } else {
            const item = items[Math.floor(Math.random() * items.length)];
            setBestOne(item);
            document.getElementById("dis-1").style.display = "block";

        }
    }
    return (
        <div className='main'>
            <h1>Selected Items</h1>
            <hr />
            <div id='dis'>
                {
                    newItems.map(item => <p>{item.name}</p>)
                }
            </div>
            <button className='btn-1' onClick={() => random(newItems)} >Choose 1 For Me</button><br />
            <h2 id="dis-1"> Your Best One:{bestOne.name}</h2>
            <button className="btn-2" onClick={() => props.clear()}>CHOOSE AGIAN</button>


        </div>
    );
};

export default Selected;