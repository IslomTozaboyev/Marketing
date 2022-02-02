import React from 'react';
import Footer from './Footer';

const Container = ({ children }) => {
    return <>
        <div className='my__container'>

            {children}
            <Footer />
        </div>
    </>
};

export default Container;
