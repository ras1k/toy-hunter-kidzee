import { Link } from "react-router-dom";

const MyToy = ({ toy, handleDelete }) => {
    const {
        picture,
        name,
        sellerName,
        subCategory,
        price,
        quantity, _id
    } = toy;

    return (
        <div className="">
            <div className="overflow-auto w-none lg:w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th className='text-xl font-semibold'>Toy Name</th>
                            <th className='text-xl font-semibold'>Seller</th>
                            <th className='text-xl font-semibold'>Sub Category</th>
                            <th className='text-xl font-semibold'>Price</th>
                            <th className='text-xl font-semibold'>Available Quantity</th>
                            <th className='text-xl font-semibold'>Edit</th>
                            <th className='text-xl font-semibold'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
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
                                        <div className="font-bold">{name}</div>

                                    </div>
                                </div>
                            </td>
                            <td className='w-1/5'>
                                {sellerName}
                            </td>
                            <td className='w-1/5'>{subCategory}</td>
                            <td className='w-1/5'>
                                {price}
                            </td>
                            <td className='w-1/5'>
                                {quantity}
                            </td>
                            <th>
                                <Link to={`/updatedToy/${_id}`}><button className="btn btn-outline btn-sm btn-neutral">Edit</button></Link>
                            </th>

                            <th>
                                <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-600 hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;