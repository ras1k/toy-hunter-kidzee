import React from 'react';
import img1 from '../../../assets/images.jpg'
import img2 from '../../../assets/car (2).jpg'
import img3 from '../../../assets/car (3).jpg'
import img4 from '../../../assets/car (4).jpg'
import img5 from '../../../assets/car (5).jpg'
import img6 from '../../../assets/car (6).jpg'


const Gallery = () => {

    return (
        <div className='mt-10 mb-20'>
            <div className='text-center mb-5'>
                <h3 className='lg:text-[48px] text-[40px] ml-10  md:text-[68px] text-teal-500 font-bold' >Image Gallery</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <img src={img5} className='rounded-s-lg rounded-b-none' alt="" />
                </div>
                <div>
                    <img src={img2} className='rounded-e-lg rounded-b-none' alt="" />
                </div>
                <div>
                    <img src={img4}  alt="" />
                </div>
                <div>
                    <img src={img5} alt="" />
                </div>
                <div>
                    <img src={img5} className='rounded-r-none rounded-b-lg' alt="" />
                </div>
                <div>
                    <img src={img4} className='rounded-r-lg rounded-t-none' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;