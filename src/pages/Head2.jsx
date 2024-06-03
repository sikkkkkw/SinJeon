import React, { useState } from 'react';

export default function Head2() {
    const [activeMenu, setActiveMenu] = useState('');

    const handleMouseEnter = (menu) => {
        setActiveMenu(menu);
    };

    const handleMouseLeave = () => {
        setActiveMenu('');
    };

    const menuItems = [
        {
            title: '신전떡볶이',
            links: [
                { name: '인사말', href: '/' },
                { name: '회사 연혁', href: '/' },
                { name: '브랜드 소개', href: '/' },
                { name: '신전떡볶이체', href: '/' },
                { name: '캐릭터', href: '/' },
                { name: '인증서/등록증', href: '/' },
                { name: '시험성적서', href: '/' },
                { name: '찾아오시는 길', href: '/' },
            ],
        },
        {
            title: '메뉴',
            links: [
                { name: '떡볶이', href: '/' },
                { name: '튀김', href: '/' },
                { name: '라이스', href: '/' },
                { name: '기타', href: '/' },
            ],
        },
        {
            title: '신전떡볶이양념 HACCP인증',
            links: [
                { name: 'HACCP란?', href: '/' },
                { name: '신전 HACCP 시스템', href: '/' },
                { name: '신전양념 검사성적', href: '/' },
            ],
        },
        {
            title: '가맹점',
            links: [
                { name: '국내 가맹점', href: '/' },
                { name: '해외 가맹점', href: '/' },
            ],
        },
        {
            title: '프랜차이즈',
            links: [
                { name: '신전의 약속', href: '/' },
                { name: '가맹개설 절차', href: '/' },
                { name: '일반형 인테리어', href: '/' },
                { name: '고급형 인테리어', href: '/' },
                { name: '뉴 비기닝', href: '/' },
                { name: '명예의 전당', href: '/' },
            ],
        },
        {
            title: '커뮤니티',
            links: [
                { name: '공지사항', href: '/' },
                { name: 'Gallery', href: '/' },
                { name: '신전VIDEO', href: '/' },
                { name: 'FAQ', href: '/' },
                { name: '고객의 소리', href: '/' },
                { name: '가맹점 점검 문의', href: '/' },
                { name: '해외 가맹 소식', href: '/' },
            ],
        },
    ];

    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full h-[88px] flex justify-center">
                <div className="w-full max-w-[100%] md:max-w-[60%] flex justify-between items-center px-4 md:px-0">
                    <a href="/">
                        <img src="http://sinjeon.co.kr/img/common/logo1_normal2.png" alt="" className="h-8 md:h-12 " />
                    </a>
                    <div className="flex">
                        {menuItems.map((menu) => (
                            <div
                                key={menu.title}
                                className="px-2 md:px-4  md:py-[20px] text-[10px] md:text-[18px] text-center font-bold relative group cursor-pointer"
                                onMouseEnter={() => handleMouseEnter(menu.title)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {menu.title}
                            </div>
                        ))}
                    </div>
                    <img
                        src="http://sinjeon.co.kr/img/common/logo2_normal.png"
                        alt=""
                        className="h-8 sm:h-12 hidden md:block"
                    />
                </div>
            </div>
            {activeMenu && (
                <div
                    className="absolute top-[41px] left-0 w-full  bg-white shadow-lg"
                    onMouseEnter={() => handleMouseEnter(activeMenu)}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-[1000px] mx-auto p-4">
                        {menuItems.map((menu) => (
                            <div key={menu.title}>
                                <h3 className="font-bold mb-2 text-center">{menu.title}</h3>
                                {menu.links.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="block px-2 py-1 hover:bg-gray-100 rounded text-[12px] text-center"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
