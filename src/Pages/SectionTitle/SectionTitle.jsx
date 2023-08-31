import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='mx-auto text-center md:w-4/12'>
            <p className='text-teal-950 mb-2 text-xl font-semibold'>|...{subHeading}...|</p>
            <h3 className='text-3xl uppercase mb-4 bg-gradient-to-r from-teal-950 to-black text-white rounded-lg py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;