import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../Hooks/useProducts';

const ProductDetails = () => {
    const {id} = useParams();
    // console.log(id);
    const {products, loading, error} = useProducts();
    // console.log(products);
    const product = products.find(p => String(p.id) === id);
    // console.log(product);
    if(loading){
        return <p>Loading...</p>
    }
    const {name, image, price, category, description} = product || {};


    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className='h-84 overflow-hidden'>
                <img
                className='w-full object-cover'
                src={image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p>Price: ${price}</p>
                <p>Category: {category}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-outline">Add to Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;