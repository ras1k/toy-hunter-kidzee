import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Featured from '../Featured/Featured';
import NewsLetter from '../NewsLetter/NewsLetter';
import HomeTabs from '../HomeTabs/HomeTabs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='max-w-screen-xl mx-auto'>
                <Gallery></Gallery>
                <HomeTabs></HomeTabs>
                <Featured></Featured>
                <NewsLetter ></NewsLetter>
            </div>
        </div>
    );
};

export default Home;