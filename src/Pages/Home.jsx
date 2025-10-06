import React from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>

            <h1>This is home page</h1>
        </div>
    );
};

export default Home;