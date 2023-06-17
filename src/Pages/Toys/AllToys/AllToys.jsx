import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyCard from './ToyCard';
import HomeTabs from '../../Home/HomeTabs/HomeTabs';

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
            {
                toys.map(toy => <HomeTabs
                key={toy._id}
                toy={toy}
                ></HomeTabs>)
            }
        </div>
    );
};

export default AllToys;