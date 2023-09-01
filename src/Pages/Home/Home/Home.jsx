import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Featured from '../Featured/Featured';
import NewsLetter from '../NewsLetter/NewsLetter';
import HomeTabs from '../HomeTabs/HomeTabs';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import FeaturedItems from '../FeaturedItems/FeaturedItems';
import AnimateCar from '../Animate/AnimateCar';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-screen-xl mx-auto'>
                <Gallery></Gallery>
                <AnimateCar />
                <HomeTabs></HomeTabs>
                <VideoPlayer />
                <FeaturedItems />
                <Featured></Featured>
                <Testimonials />
                <NewsLetter ></NewsLetter>
            </div>
        </div>
    );
};

export default Home;