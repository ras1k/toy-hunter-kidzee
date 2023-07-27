import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const allToys = useLoaderData()
    const { picture, name, price, quantity, email, description, rating, sellerName } = allToys;
    return (
        <div>
            <div className="hero mb-10">
                <div className="hero-content flex-col gap-20 lg:flex-row">
                    <div className='bg-teal-950 bg-opacity-90 rounded-lg'>
                        <img src={picture} className="max-w-sm rounded-lg p-8 shadow-2xl" />
                    </div>
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="my-4"><span className='text-xl font-semibold'>Seller: </span>{sellerName}</p>
                        <p className="my-4"><span className='text-xl font-semibold'>Email: </span> {email}</p>
                        <p className="my-4"><span className='text-xl font-semibold'>Price: </span> ${price}</p>
                        <p className="my-4"><span className='text-xl font-semibold'>Rating: </span> {rating}</p>
                        <p className="my-4"><span className='text-xl font-semibold'>Available Quantity: </span> {quantity}</p>
                        <h1 className=""><span className='text-xl font-semibold'>Details: </span> {description}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;