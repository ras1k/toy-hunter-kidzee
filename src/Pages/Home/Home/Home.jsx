import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Featured from '../Featured/Featured';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Featured></Featured>
        </div>
    );
};

export default Home;