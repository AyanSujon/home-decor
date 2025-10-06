import React, { useState } from 'react';
import useProducts from '../Hooks/useProducts';
import ProductCard from '../Components/ProductCard';

const Products = () => {
    const {products} = useProducts();
    const [search, setSearch] = useState("")
    // console.log(search);
    const term = search.trim().toLocaleLowerCase()

    const searchedProducts = term? products.filter(product => product.name.toLocaleLowerCase().includes(term)): products;
    // console.log(searchedProducts);




    return (
        <div>
        
        <div className='flex justify-between items-center py-5'>
            <h1 className='font-bold text-2xl'>All Products <span className='text-sm text-gray-500 font-normal'>{searchedProducts.length} products found.</span></h1>
            <label className="input">
                <input value={search} onChange={(e)=> setSearch(e.target.value)} type="search" placeholder="Search Products" />
            </label>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
            {
                searchedProducts.map(product => <ProductCard key={product.id} product={product}/> )
            }
        </div>

        </div>
    );
};

export default Products;