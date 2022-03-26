import React, { useEffect, useState } from 'react';
import Selected from './Selected/Selected';
import Product from './Product/Product';
import './Products.css'

const Products = () => {
    const [items, setItems] = useState([]);
    let [choosen, setChosen] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    function clear() {
        choosen = [];
        console.log(choosen);
        document.getElementById("dis").style.display = "none";
        document.getElementById("dis-1").style.display = "none";

    }
    function select(product) {
        const id = product.id;
        const ids = choosen.find(item => item.id === id);
        let newProduct = [...choosen, product];
        if (ids) {

        } else {
            if (newProduct.length <= 4) {
                setChosen(newProduct);
            }
        }
    }


    return (
        <div className='box'>
            <div className="products">
                {
                    items.map(product => <Product product={product} key={product.id} select={select}></Product>)
                }
            </div>
            <div className='select'>
                <Selected choosen={choosen} clear={clear} key={choosen.length}></Selected>
            </div>


        </div>
    );
};

export default Products;