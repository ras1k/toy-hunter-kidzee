import React from 'react';
import img from '../../../assets/car (11).jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div>
                <div className='p-24 mt-0 bg-fixed mb-20 background rounded-lg'>
                    <div className='bg-teal-950 bg-opacity-60 rounded-lg p-24 text-center'>
                        <h3 className='text-5xl font-mono text-white font-semibold my-4'>Toy Cars for Your Kids</h3>
                        <p className='font-semibold mb-4 text-white'>The best Way to Adorn Playing Moments. The kids' toy car zooms and races, sparking endless imaginative adventures. With vibrant colors, easy controls, and durable design, it brings joy to little drivers as they explore their world.</p>
                        <div className='gap-5'>
                            <button className='btn btn-sm lg:btn-md bg-teal-950 text-white btn-outline mb-2 md:mr-5'>Discover More</button>
                            <button className='btn btn-sm lg:btn-md btn-outline btn-ghost text-white'>Explore Cars</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;