import React, { useEffect, useState } from 'react';
import Selected from './Selected/Selected';
import Product from './Product/Product';
import './Products.css'

const Products = () => {
    const [items, setItems] = useState([]);
    const [choosen, setChosen] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    function select(product) {
        let newProduct = [...choosen, product];
        setChosen(newProduct);
    }

    return (
        <div className='box'>
            <div className="products">
                {
                    items.map(product => <Product product={product} key={product.id} select={select}></Product>)
                }
            </div>
            <div className='select'>
                <Selected choosen={choosen} key={choosen.length}></Selected>
            </div>


        </div>
    );
};

export default Products;