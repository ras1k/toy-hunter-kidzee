import React from 'react';
import { Link } from 'react-router-dom';

const ToyCard = ({ toy }) => {
    const {_id, picture, cardName, price, quantity, subject, sellerName} = toy;
    return (
        <div className=''>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                               
                            </th>
                            <th className='text-xl font-semibold'>Toy Name</th>
                            <th className='text-xl font-semibold'>Seller</th>
                            <th className='text-xl font-semibold'>Sub Category</th>
                            <th className='text-xl font-semibold'>Price</th>
                            <th className='text-xl font-semibold'>Quantity</th>
                            <th className='text-xl font-semibold'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className='w-full'>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td className='w-1/5'>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={picture} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{cardName}</div>
                                    </div>
                                </div>
                            </td>
                            <td className='w-1/5'>
                                {sellerName}
                            </td>
                            <td className='w-1/5'>{subject}</td>
                            <td className='w-1/5'>${price}</td>
                            <td className='w-full'>{quantity}</td>
                            <th>
                                <Link to={`/toyDetails/${_id}`}><button className="btn btn-ghost btn-xs">details</button></Link>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ToyCard;