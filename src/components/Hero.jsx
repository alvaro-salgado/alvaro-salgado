import React from 'react';

const Hero = () => {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden bg-dark">
            {/* Background gradient blob */}
            <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary/30 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 right-1/2 w-96 h-96 bg-secondary/30 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-4 animate-fade-in-up">
                    Software Engineer
                </h2>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 animate-fade-in-up animation-delay-100">
                    Building digital
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                        experiences
                    </span>
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10 animate-fade-in-up animation-delay-200">
                    I craft accessible, pixel-perfect, and performant web experiences that solve real-world problems.
                </p>
                <div className="flex justify-center gap-4 animate-fade-in-up animation-delay-300">
                    <a
                        href="#projects"
                        className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary md:py-4 md:text-lg md:px-10 transition-all duration-300 shadow-lg hover:shadow-primary/50"
                    >
                        View Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 border border-gray-700 text-base font-medium rounded-md text-gray-300 hover:text-white hover:border-gray-500 md:py-4 md:text-lg md:px-10 transition-all duration-300 bg-transparent"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
