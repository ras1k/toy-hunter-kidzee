import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyCard from './ToyCard';

const AllToys = () => {
    const toys = useLoaderData()
    return (
        <div className='mb-10 mt-10'>
            {
                toys.map(toy => <ToyCard
                key={toy._id}
                toy={toy}
                ></ToyCard>)
            }
            
        </div>
    );
};

export default AllToys;