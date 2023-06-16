import React from 'react';

const NewsLetter = () => {
    return (
        <div>
            <div className="hero mb-20 rounded-lg">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Subscribe To Our NewsLetter</h1>
                        <p className="py-6">We will send you updates about our new collection of toys. </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral btn-outline">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;