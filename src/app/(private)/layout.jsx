
import Footer from '@/componenet/shared/Footer';
import Header from '@/componenet/shared/Header';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
            <Header />
            <div className=' mt-20'>
                   {children}
         </div>
            <Footer/>
        </>
    );
};

export default MainLayout;