import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyCard from './ToyCard';
import SectionTitle from '../../SectionTitle/SectionTitle';

const AllToys = () => {
    const toys = useLoaderData()
    return (
        <div className='max-w-screen-xl mx-auto'>
            <SectionTitle
                subHeading=""
                heading="All Toys"
            />
            <div className='my-10'>
                {
                    toys.map(toy => <ToyCard
                        key={toy._id}
                        toy={toy}
                    ></ToyCard>)
                }

            </div>
        </div>
    );
};

export default AllToys;