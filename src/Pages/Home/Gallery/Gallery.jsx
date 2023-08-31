import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/car (1).jpg'
import img2 from '../../../assets/car (7).jpg'
import img3 from '../../../assets/car (3).jpg'
import img4 from '../../../assets/car (8).jpg'
import img5 from '../../../assets/car (9).jpg'
import img6 from '../../../assets/car (10).jpg'
import img7 from '../../../assets/car (11).jpg'
import img8 from '../../../assets/car (12).jpg'
import img9 from '../../../assets/car (13).jpg'
import img10 from '../../../assets/car (15).jpg'
import img11 from '../../../assets/car (16).jpg'


const Gallery = () => {

    return (
        <div className='mt-10 mb-20'>
            <div className='text-center mb-5'>
                <h3 className='lg:text-[42px] text-[40px] w-2/6 mx-auto rounded-lg p-1  md:text-[68px] text-white bg-teal-950 bg-opacity-90 font-bold' >Image Gallery</h3>
            </div>
            <>
            <Carousel>
                <div>
                    <img src={img1} />
                </div>
                {/* <div>
                    <img src={img2} />
                </div> */}
                {/* <div>
                    <img src={img3} />
                </div> */}
                <div>
                    <img src={img4} />
                </div>
                {/* <div>
                    <img src={img5} />
                </div> */}
                <div>
                    <img src={img6} />
                </div>
                <div>
                    <img src={img7} />
                </div>
                <div>
                    <img src={img8} />
                </div>
                <div>
                    <img src={img9} />
                </div>
                <div>
                    <img src={img10} />
                </div>
                {/* <div>
                    <img src={img11} />
                </div> */}
            </Carousel>
            </>
        </div >
    );
};

export default Gallery;