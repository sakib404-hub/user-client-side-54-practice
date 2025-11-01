import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='min-h-screen border'>
                okey!
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Layout;