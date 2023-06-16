import React from 'react';
import img from '../../../assets/login.png'
const NewsLetter = () => {
    return (
        <div>
            <div className="hero mb-20 rounded-lg">
                <div className="hero-content flex-col gap-10 lg:flex-row">
                    <div className="text-center w-1/2 lg:text-left">
                        <h1 className="md:text-5xl font-bold">Subscribe To Our NewsLetter</h1>
                        <p className="py-6">We will send you updates about our new collection of toys. </p>
                        <div className="">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-sm md:btn-md btn-neutral btn-outline">Subscribe</button>
                            </div>
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;