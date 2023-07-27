import React from 'react';
import './Featured.css';
import img from '../../../assets/car (13).jpg'
import img2 from '../../../assets/car (8).jpg'


const Featured = () => {
    return (
        <div className='mb-20 mt-20 p-4'>
            <div className='text-center mb-5'>
                <h3 className='lg:text-[42px] text-[30px] w-2/6 mx-auto rounded-lg lg:p-1  md:text-[68px] text-white bg-teal-950 bg-opacity-90 font-bold' >Featured Blogs</h3>
            </div>
            <div className="section lg:flex gap-5">
                <div className="card w-96 bg-base-100 card-area  mt-5 shadow-xl">
                    <figure><img src="https://cdn.shopify.com/s/files/1/0584/0958/2731/articles/4.jpg?v=1651562657" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Love between mother and daughter</h2>
                        <p>Mother and girl play with toy cars, sharing laughter and creating imaginary roads. Their bond grows stronger with each fun-filled moment, forming cherished memories.</p>
                        <div className="card-actions justify-start mt-7">
                            <button className="py-3 px-7 text-center bg-teal-950 text-white btn btn-outline font-[700] cursor-pointer rounded-full  border-none w-full">Read More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 card-area mt-5 shadow-xl">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New Toy School Bus looks stunning</h2>
                        <p>The new toy school bus sparks imagination with its vibrant colors and interactive features, offering endless fun for little adventurers.</p>
                        <div className="card-actions justify-start mt-7">
                            <a className="py-3 px-7 text-center text-[14px] font-[700] cursor-pointer rounded-full bg-teal-950 text-white btn btn-outline border-none w-full">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 card-area mt-5 shadow-xl">
                    <figure><img src="https://cdn.shopify.com/s/files/1/0584/0958/2731/articles/1.jpg?v=1651562604" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New play tool that helps learn Math</h2>
                        <p>The new math play tool engages young minds, making learning enjoyable. With interactive features, it fosters a deeper understanding of math concepts.</p>
                        <div className="card-actions justify-start mt-7">
                            <a className="py-3 px-7 text-center text-[14px] font-[700] cursor-pointer rounded-full bg-teal-950 text-white btn btn-outline border-none w-full">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 card-area  mt-5 shadow-xl">
                    <figure><img src={img2} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Beautiful new toy car for you</h2>
                        <p>The new toy car thrills young minds with its sleek design and exciting features, igniting endless playtime adventures and creativity.</p>
                        <div className="card-actions justify-start mt-7">
                            <a className="py-3 px-7 text-center text-[14px] font-[700] cursor-pointer rounded-full bg-teal-950 text-white btn btn-outline  border-none w-full">Read More</a>
                        </div>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default Featured;