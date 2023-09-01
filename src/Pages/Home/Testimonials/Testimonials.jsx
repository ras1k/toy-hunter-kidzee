import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import { Rating, ThinStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from 'react-icons/fa';
import SectionTitle from '../../SectionTitle/SectionTitle';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://bistro-boss-server-three-omega.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    const myStyles = {
        itemShapes: ThinStar,
        activeFillColor: '#042f2e',
        inactiveFillColor: '#a8a29e'
      }
    return (
        <div>
            <SectionTitle
                subHeading={'What out client say'}
                heading={'Testimonials'}
            ></SectionTitle>
            <div className='my-20'>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className='flex flex-col items-center lg:px-20 px-6'>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    itemStyles={myStyles}
                                    readOnly
                                    className='mb-4'
                                />
                                <FaQuoteLeft size={100} className='text-lg'/>
                                <p className='my-8'>{review.details}</p>
                                <h3 className='text-xl text-teal-950'>{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;