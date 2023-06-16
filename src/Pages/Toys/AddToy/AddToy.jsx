import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const AddToy = () => {
    const {user} = useContext(AuthContext)

    const handleAddToy = event => {
        event.preventDefault();

        const form = event.target;

        const photo = form.photo.value;
        const name = form.name.value;
        const seller = form.seller.value;
        const email = user?.email;
        const subCategory = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const details = form.details.value;
        const quantity = form.quantity.value;

        const addToy = {photo,name,seller,email,subCategory,price,rating,details,quantity }

        console.log(addToy);

        // send data to the server
        // fetch('https://y-xi-indol.vercel.app/addToy', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(addToy)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         if(data.insertedId){
        //             Swal.fire(
        //                 'Post successfully',
        //               )
        //               form.reset();
        //         }
        //     })
    }
    return (
        <div className="bg-slate-300 p-24">
            <h2 className="text-3xl font-extrabold">Add a Toy</h2>
            <form onSubmit={handleAddToy}>
                {/* form name and price row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Name"  className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
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
                            <input type="text" name="seller" defaultValue={user?.displayName} placeholder="Seller Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">
                            <input readOnly type="text" name="email" placeholder="Email" className="input input-bordered w-full"  defaultValue={user?.email}/>
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
                            <input type="text" name="category" placeholder="Sub-category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
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
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Detail description" className="input input-bordered w-full" />
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
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Toy"  className="bg-[#38797B] text-[white] py-3 rounded-xl cursor-pointer btn-block" />

            </form>
        </div>
    );
};

export default AddToy;