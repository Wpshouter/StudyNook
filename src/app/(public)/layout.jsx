
import Footer from '@/componenet/shared/Footer';
import Header from '@/componenet/shared/Header';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
         <Header/>
            {children}
            <Footer/>
        </>
    );
};

export default MainLayout;