import React from 'react';
import { useLoaderData } from 'react-router';
import ProductCard from '../Components/ProductCard';


const Home = () => {
    const products = useLoaderData();

    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
            {
                products.map(product => <ProductCard key={product.id} product={product}/> )
            }
        </div>
        
        </>
    );
};

export default Home;