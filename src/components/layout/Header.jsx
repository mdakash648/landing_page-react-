import React from 'react'

const Header = () => {
    return (
        <>
            <header className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="#" className="flex items-center gap-2">
                        <img src="image/logo.png" alt="Brand Logo" className="h-10" />
                    </a>

                    {/* <!-- Desktop Menu --> */}
                    <nav className="hidden md:flex space-x-8">
                        <a href="#features" className="text-gray-600 hover:text-primary transition">Features</a>
                        <a href="#about" className="text-gray-600 hover:text-primary transition">About</a>
                        <a href="#pricing" className="text-gray-600 hover:text-primary transition">Pricing</a>
                        <a href="#contact" className="text-gray-600 hover:text-primary transition">Contact</a>
                    </nav>

                    {/* <!-- CTA Button --> */}
                    <div className="hidden md:block">
                        <a href="#"
                            className="bg-primary text-white px-6 py-2.5 rounded-full font-medium hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/30">
                            Get Started
                        </a>
                    </div>

                    {/* <!-- Mobile Menu Button --> */}
                    <button id="menu-btn" className="md:hidden text-gray-600 text-2xl focus:outline-none">
                        <i className="ri-menu-4-line"></i>
                    </button>
                </div>

                {/* <!-- Mobile Menu --> */}
                <div id="mobile-menu" className="hidden md:hidden bg-white border-t border-gray-100 absolute w-full">
                    <div className="flex flex-col p-6 space-y-4">
                        <a href="#features" className="text-gray-600 hover:text-primary">Features</a>
                        <a href="#about" className="text-gray-600 hover:text-primary">About</a>
                        <a href="#pricing" className="text-gray-600 hover:text-primary">Pricing</a>
                        <a href="#contact" className="text-gray-600 hover:text-primary">Contact</a>
                        <a href="#" className="text-primary font-medium">Get Started</a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header