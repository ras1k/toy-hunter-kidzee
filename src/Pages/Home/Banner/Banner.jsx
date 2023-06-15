import React from 'react';
import img from '../../../assets/sandy-millar-nuS2GDpCDoI-unsplash.jpg'
const Banner = () => {
    return (
        <div>
            <div className='relative w-full mb-4 '>
                <img src={img} className='w-full rounded-lg h-5/6'  alt="" />
                <div className="absolute flex items-center px-24 rounded-xl text-center h-full gap-5 left-0 top-0 bottom-0 bg-gradient-to-r from-[#4b4949] to-[rgba(21- 21- 21- 0)] ">
                        
                        <div className='text-white md:space-y-7'>
                            <h2 className='md:text-6xl font-extrabold'>
                            <p>Toy Cars for Your Kids</p>
                            </h2>
                            <p className='md:text-2xl'>the best Way to Adorn Playing Moments</p>
                            <div className=''>
                                <button className='btn btn-primary md:mr-5'>Discover More</button>
                                <button className='btn btn-outline btn-ghost text-white'>Explore Cars</button>
                            </div>
                        </div>
                    
                    </div>
            </div>
        </div>
    );
};

export default Banner;