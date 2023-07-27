import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './styles.css';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

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
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    effect={'fade'}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation, EffectFade]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div>
                            <img src={img5} className='rounded-s-lg rounded-b-none' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img2} className='rounded-e-lg rounded-b-none' alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img4} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img6} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img7} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img8} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img9} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img10} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src={img11} alt="" />
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
            </>
        </div >
    );
};

export default Gallery;