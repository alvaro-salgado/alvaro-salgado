import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-dark text-white font-sans selection:bg-primary selection:text-white">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <footer className="bg-black/30 py-8 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Alvaro Salgado. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
