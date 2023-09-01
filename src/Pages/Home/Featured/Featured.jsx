import './Featured.css';
import img from '../../../assets/car (13).jpg'
import img2 from '../../../assets/car (8).jpg'
import img3 from '../../../assets/car (12).jpg'
import img4 from '../../../assets/car (14).jpg'
import SectionTitle from '../../SectionTitle/SectionTitle';
import Tilt from 'react-parallax-tilt';

const Featured = () => {
    return (
        <div className='mb-20 mt-20'>
            <SectionTitle
                subHeading={'Featured'}
                heading={'Blogs'}
            >
            </SectionTitle>
            <div className="section lg:flex gap-5">
                <Tilt className="card w-full bg-base-100 card-area  mt-5 shadow-xl">
                    <figure><img src={img} alt="Food" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New Toy School Bus looks stunning</h2>
                        <p>
                            The new toy school bus sparks imagination with its vibrant colors and interactive features, offering endless fun for little adventurers...
                        </p>
                        <div className="card-actions justify-start mt-7">
                            <a className="py-3 px-7 text-center text-[14px] font-[700] cursor-pointer rounded-full bg-yellow-950 text-white border-none w-full">Read More</a>
                        </div>
                    </div>
                </Tilt>
                <Tilt className="card w-full bg-base-100 card-area  mt-5 shadow-xl">
                    <figure><img src={img2} alt="Food" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">New Toy School Bus looks stunning</h2>
                        <p>
                            The new toy school bus sparks imagination with its vibrant colors and interactive features, offering endless fun for little adventurers...
                        </p>
                        <div className="card-actions justify-start mt-7">
                            <a className="py-3 px-7 text-center text-[14px] font-[700] cursor-pointer rounded-full bg-yellow-950 text-white border-none w-full">Read More</a>
                        </div>
                    </div>
                </Tilt>
                <Tilt className="card w-full bg-base-100 card-area mt-5 shadow-xl">
                    <figure><img src={img4} alt="Food" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Beautiful new toy car for you</h2>
                        <p>
                        The new toy car thrills young minds with its sleek design and exciting features, igniting endless playtime adventures and creativity...</p>
                        <div className="card-actions justify-start mt-7">
                            <a className="py-3 px-7 text-center text-[14px] font-[700] cursor-pointer rounded-full bg-yellow-950 text-white border-none w-full">Read More</a>
                        </div>
                    </div>
                </Tilt>
                <Tilt className="card w-full bg-base-100 card-area mt-5 shadow-xl">
                    <figure><img src={img3} alt="Food" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Beautiful new toy car for you</h2>
                        <p>
                        The new toy car thrills young minds with its sleek design and exciting features, igniting endless playtime adventures and creativity...</p>
                        <div className="card-actions justify-start mt-7">
                            <a className="py-3 px-7 text-center text-[14px] font-[700] cursor-pointer rounded-full bg-yellow-950 text-white border-none w-full">Read More</a>
                        </div>
                    </div>
                </Tilt>

            </div>



        </div>
    );
};

export default Featured;