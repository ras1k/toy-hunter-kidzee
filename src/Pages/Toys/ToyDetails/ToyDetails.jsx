import React from 'react';

const ToyDetails = () => {
    const {picture, cardName, price, quantity, subject, sellerName} = toy;
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">Seller: {seller}</p>
                        <p className="py-6">Email: {email}</p>
                        <p className="py-6">Price: {price}</p>
                        <p className="py-6">rating: {rating}</p>
                        <p className="py-6">Available Quantity: {quantity}</p>
                        <h1 className="text-[180x]">Details: {details}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;