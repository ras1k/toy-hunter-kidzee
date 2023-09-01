import React from 'react';
import img from '../../../assets/car (11).jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div>
                <div className='lg:p-24 p-6 mt-0 bg-fixed mb-20 background rounded-lg'>
                    <div className='bg-teal-950 bg-opacity-60 rounded-lg lg:p-24 p-4 h-96 lg:h-[600px] md:h-[400px] text-center flex flex-col items-center justify-center'>
                        <h3 className='lg:text-6xl text-3xl font-mono text-white font-bold my-4'>Toy Cars for Your Kids</h3>
                        <p className='lg:font-semibold text-sm lg:text-lg mb-4 text-white'>
                            Elevate your playtime with our exceptional kids' toy car! This dynamic vehicle zooms and races, igniting boundless imaginative adventures for your little ones. With its eye-catching vibrant colors, intuitive and easy-to-use controls, and a robust and durable design, this toy brings unbridled joy as it empowers young drivers to explore their world with boundless enthusiasm and creativity.
                        </p>
                        <div className='gap-5'>
                            <button className='btn btn-sm lg:btn-md bg-teal-950 text-white btn-outline mb-2 md:mr-5 mr-2'>Discover More</button>
                            <button className='btn btn-sm lg:btn-md btn-outline btn-ghost text-white'>Explore Cars</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;