import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

const AddToy = () => {
    const { user } = useContext(AuthContext)

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;

        const picture = form.photo.value;
        const name = form.name.value;
        const sellerName = form.seller.value;
        const email = user?.email;
        const subCategory = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.details.value;
        const quantity = form.quantity.value;

        const addToy = { picture, sellerName, name, email, subCategory, price, rating, description, quantity }

        console.log(addToy);

        // send data to the server
        fetch('https://toy-marketplace-server-three-alpha.vercel.app/addToy', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire(
                        'Post successfully',
                    )
                    form.reset();
                }
            })
    }
    return (
        <div className="bg-teal-950 p-24 mb-20 mt-10 rounded-lg">
            <h2 className="text-4xl text-center font-extrabold text-white">Add a Toy</h2>
            <form onSubmit={handleAddToy}>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-white">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Seller Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="seller" defaultValue={user?.displayName} placeholder="Seller Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <label className="input-group">
                            <input readOnly type="text" name="email" placeholder="Email" className="input input-bordered w-full" defaultValue={user?.email} />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Sub-category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Sub-category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-white">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text text-white">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text text-white">Detail description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Detail description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text text-white">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Toy" className="btn-outline btn text-white glass btn-block" />

            </form>
        </div>
    );
};

export default AddToy;