import React from 'react';
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

const UpdatedToy = () => {
    const toy = useLoaderData();
    const {picture,name,sellerName,email,subCategory,price,rating,description,quantity, _id} = toy;

    const handleUpdatedToy = event => {
        event.preventDefault();

        const form = event.target;

        const picture = form.photo.value;
        const name = form.name.value;
        const sellerName = form.seller.value;
        const email = form.email.value;
        const subCategory = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.details.value;
        const quantity = form.quantity.value;

        const updatedToy = {picture,name,sellerName,email,subCategory,price,rating,description,quantity }

        console.log(updatedToy);

        // send data to the server
        fetch(`https://toy-marketplace-server-three-alpha.vercel.app/allToys/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount){
                    Swal.fire(
                        'Toy Updated successfully',
                      )
                      form.reset();
                }
            })
    }
    return (
        <div>
            <div className="bg-slate-300 p-24 mb-20 mt-10 rounded-lg">
                <h2 className="text-4xl font-extrabold text-center">Update Toy</h2>
                <form onSubmit={handleUpdatedToy}>
                    {/* form name and price row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" defaultValue={name} placeholder="Name"  className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form seller row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="seller" defaultValue={sellerName} placeholder="Seller Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group">
                                <input readOnly type="text" defaultValue={email} name="email" placeholder="Email" className="input input-bordered w-full"  />
                            </label>
                        </div>
                    </div>
                    {/* form sub category and rating row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Sub-category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" defaultValue={subCategory} placeholder="Sub-category" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" defaultValue={rating} placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form available quantity and details row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Available Quantity</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text">Detail description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="details" defaultValue={description} placeholder="Detail description" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Photo url row */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" defaultValue={picture} placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Update Toy" className="bg-[#38797B] btn btn-neutral glass py-3 rounded-xl cursor-pointer btn-block" />

                </form>
            </div>
        </div>
    );
};

export default UpdatedToy;