import React from 'react';
import './Featured.css';


const Featured = () => {
    return (
        <div className='mb-20 mt-20'>
            <h1 className="lg:text-[48px] text-[40px] ml-10  md:text-[68px] text-center font-bold ">
                <span className='text-teal-500'>Featured Blog Posts
                </span>
            </h1>
            <div className="section lg:flex gap-5">
                <div className="card w-96 bg-base-100 card-area  mt-5 shadow-xl">
                    <figure><img src="https://cdn.shopify.com/s/files/1/0584/0958/2731/articles/4.jpg?v=1651562657" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Curabitur et urna venenatis tempor est sit amet</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ...</p>
                        <div className="card-actions justify-start mt-7">
                            <a className="py-3 px-7 text-center text-[14px] font-[700] cursor-pointer rounded-full bg-[#B8D4C6] border-none w-full">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 card-area mt-5 shadow-xl">
                    <figure><img src="https://cdn.shopify.com/s/files/1/0584/0958/2731/articles/1.jpg?v=1651562604" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Curabitur et urna venenatis tempor est sit amet</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ...</p>
                        <div className="card-actions justify-start mt-7">
                            <a className="py-3 px-7 text-center text-[14px] font-[700] cursor-pointer rounded-full bg-[#B8D4C6] border-none w-full">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 card-area  mt-5 shadow-xl">
                    <figure><img src="https://cdn.shopify.com/s/files/1/0584/0958/2731/articles/3.jpg?v=1651562423" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Curabitur et urna venenatis tempor est sit amet</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ...</p>
                        <div className="card-actions justify-start mt-7">
                            <a className="py-3 px-7 text-center text-[14px] font-[700] cursor-pointer rounded-full bg-[#B8D4C6] border-none w-full">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 card-area mt-5 shadow-xl">
                    <figure><img src="https://cdn.shopify.com/s/files/1/0584/0958/2731/articles/6.jpg?v=1651562693" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Curabitur et urna venenatis tempor est sit amet</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ...</p>
                        <div className="card-actions justify-start mt-7">
                            <a className="py-3 px-7 text-center text-[14px] font-[700] cursor-pointer rounded-full bg-[#B8D4C6] border-none w-full">Read More</a>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Featured;