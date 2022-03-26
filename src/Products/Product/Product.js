import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { product, select } = props;
    const { name, picture, id, } = product;
    // console.log(select);

    return (
        <div className='product'>
            <div className="details">
                <img src={picture} alt="" />
                <h2>{name}</h2>
            </div>

            <button className="btn" onClick={() => select(product)}>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>


        </div>
    );
};

export default Product;