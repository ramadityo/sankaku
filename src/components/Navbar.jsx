import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

export default function Navbar() {
    // None	width: 100%;
    // sm (640px)	max-width: 640px;
    // md (768px)	max-width: 768px;
    // lg (1024px)	max-width: 1024px;
    // xl (1280px)	max-width: 1280px;
    // 2xl (1536px)	max-width: 1536px;

    const [toggleActive, setIsActive] = useState(false);

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <div className="max-w-[1400px] max-xl:max-w-[1024px] max-lg:max-w-[768px] max-md:max-w-[640px] max-sm:max-w-full mx-auto flex justify-between py-6">
                <div>
                    <NavLink to="/" onClick={() => setIsActive(false)}>
                        <p className="font-outfit text-blue-primary font-semibold text-2xl">Sankaku</p>
                    </NavLink>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <button onClick={() => setIsActive(!toggleActive)} className="px-4 py-2  text-white rounded-xl flex items-center gap-2 cursor-pointer">
                            <p className="text-blue-primary font-semibold">Tools</p>
                            <i className="fa-solid fa-angle-down text-blue-primary"></i>
                        </button>

                        {toggleActive && (
                            <div className="absolute top-10 right-5 w-[150px] bg-white shadow-md rounded-xl border border-blue-primary/20 overflow-hidden divide-y divide-blue-primary/20">
                                <NavLink onClick={() => setIsActive(false)} to="/calculus" className={({ isActive }) => `block px-4 py-2 transition-all ${isActive ? "bg-blue-primary text-white" : "hover:bg-blue-primary hover:text-white"}`}>
                                    Calculus
                                </NavLink>
                                <NavLink onClick={() => setIsActive(false)} to="/statistics" className={({ isActive }) => `block px-4 py-2 transition-all ${isActive ? "bg-blue-primary text-white" : "hover:bg-blue-primary hover:text-white"}`}>
                                    Statistic
                                </NavLink>
                                <NavLink onClick={() => setIsActive(false)} to="/unit-converter" className={({ isActive }) => `block px-4 py-2 transition-all ${isActive ? "bg-blue-primary text-white" : "hover:bg-blue-primary hover:text-white"}`}>
                                    Unit Converter
                                </NavLink>
                            </div>
                        )}
                    </div>
                    <div className="flex items-center gap-4">
                        {/* <p className="font-outfit text-blue-primary font-semibold text-2xl">Sankaku</p> */}
                        <a href="https://www.linkedin.com/in/ramadityo/" target="_blank">
                            <i className="fa-brands fa-square-linkedin text-blue-primary text-xl"></i>
                        </a>
                        <a href="https://github.com/ramadityo/sankaku" target="_blank">
                            <i className="fa-brands fa-github text-blue-primary text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
