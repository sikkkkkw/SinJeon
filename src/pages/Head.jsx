import React, { useState, useEffect } from 'react';

export default function Head() {
    const [selectedCategory, setSelectedCategory] = useState('떡볶이');
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setSelectedCategory('떡볶이');
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="w-full flex justify-center">
            <div className="w-full bg-black h-[41px] z-10 flex justify-center">
                <div className="w-full md:max-w-[60%] max-w-[100%] flex justify-between items-center px-4 md:px-0">
                    <div className="flex justify-start items-center gap-2 md:gap-6 text-white">
                        <div
                            className={`md:text-[1.0em] text-base px-2 md:px-[16px] py-[10px] cafefont cursor-pointer ${
                                selectedCategory === '떡볶이' ? 'bg-white text-black rounded-t-lg ' : ''
                            }`}
                            onClick={() => handleCategoryClick('떡볶이')}
                        >
                            신전 떡볶이
                        </div>
                        <div
                            className={`md:text-[1.0em] text-base px-2 md:px-[16px] py-[10px] cafefont cursor-pointer ${
                                selectedCategory === '뮤지엄' ? 'bg-white text-black rounded-t-lg' : ''
                            }`}
                            onClick={() => handleCategoryClick('뮤지엄')}
                        >
                            신전 뮤지엄
                        </div>
                        <div
                            className={`md:text-[1.0em] text-base px-2 md:px-[16px] py-[10px] cafefont cursor-pointer ${
                                selectedCategory === '더신전' ? 'bg-white text-black rounded-t-lg' : ''
                            }`}
                            onClick={() => handleCategoryClick('더신전')}
                        >
                            더신전
                        </div>
                    </div>
                    <div className="hidden md:flex gap-4 text-white">
                        <div className="text-[10px]">LOGIN</div>
                        <div className="text-[10px]">JOIN</div>
                        <div className="text-[10px]">ENG</div>
                    </div>
                    <div className="md:hidden flex items-center ml-auto">
                        <button onClick={toggleMenu} className="text-white">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                        {menuOpen && (
                            <div className="absolute top-[41px] right-0 bg-black text-white flex flex-col gap-2 p-4">
                                <div className="text-[20px]">LOGIN</div>
                                <div className="text-[20px]">JOIN</div>
                                <div className="text-[20px]">ENG</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
