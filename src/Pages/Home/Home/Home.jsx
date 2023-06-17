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
            <Gallery></Gallery>
            <HomeTabs></HomeTabs>
            <Featured></Featured>
            <NewsLetter ></NewsLetter>
        </div>
    );
};

export default Home;