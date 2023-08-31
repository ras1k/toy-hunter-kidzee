
import img from '../../../assets/car (1).jpg'
import moment from 'moment';
import './FeaturedItems.css'
import Tilt from 'react-parallax-tilt';
import './FeaturedItems.css'
import SectionTitle from '../../SectionTitle/SectionTitle';

const FeaturedItems = () => {
    return (
        <div className='mt-10'>
            <SectionTitle
                subHeading={'Check it out'}
                heading={'Featured Car'}
            ></SectionTitle>
            <div className="mt-5 mb-10 featured-item bg-fixed text-white pt-8 my-20">
                <div className='md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 lg:px-36'>
                    <Tilt>
                        <img src={img} alt="car" className='w-full p-2 lg:p-0' />
                    </Tilt>
                    <div className='lg:ml-10 mt-2 px-2 lg:p-0'>
                        <p>{moment().format('MMMM Do, YYYY')}</p>
                        <p>Where can i get some?</p>
                        <p>
                            A small, yellow classical toy car is a charming and timeless plaything that captures the essence of nostalgia and adventure. With its vibrant yellow hue reminiscent of sunny days and open roads, this toy car brings a sense of joy to both young and old.

                            Crafted with attention to detail, this miniature classic car embodies a sense of elegance and simplicity. Its smooth curves and sleek design harken back to a bygone era of automotive beauty, while its small size fits perfectly in the hands of a child, inviting imaginative journeys to unexplored destinations.
                        </p>
                        <button className='bg-gradient-to-r from-teal-950 to-black text-white btn btn-outline cursor-pointer border-none mt-2'>Order Now</button>
                    </div>
                </div>
            </div></div>
    );
};

export default FeaturedItems;