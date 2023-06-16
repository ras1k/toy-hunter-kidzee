import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetails = () => {
    const allToys = useLoaderData()
    const { picture, name, price, quantity, email, description, rating, sellerName } = allToys;
    return (
        <div>
            <div className="hero min-h-screen mb-10">
                <div className="hero-content flex-col gap-20 lg:flex-row">
                    <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">Seller: {sellerName}</p>
                        <p className="py-6">Email: {email}</p>
                        <p className="py-6">Price: {price}</p>
                        <p className="py-6">rating: {rating}</p>
                        <p className="py-6">Available Quantity: {quantity}</p>
                        <h1 className="text-[180x]">Details: {description}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;