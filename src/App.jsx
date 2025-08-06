import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="w-full flex flex-col items-center py-10 px-3">
            {/* <p>Ini Home</p> */}
            <div className="space-y-8 flex flex-col items-center">
                <img src="/logo.png" className="w-[350px] h-auto animate-rubberBand" alt="" />

                <div className="space-y-6 flex flex-col items-center">
                    <p className="font-outfit text-6xl font-bold text-blue-primary text-center max-w-5xl">Empowering your math skills through interactive tools.</p>
                    <p className="font-outfit font-light text-2xl max-w-2xl text-regular text-center text-gray-600">
                        All-in-one <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-primary to-blue-secondary">interactive math tools</span> built for students, educators, and enthusiasts. Visualize, calculate, and master concepts with ease.
                    </p>
                </div>
            </div>
            {/* <input type="text" name="solver" id="solver" className="w-xl h-15 border border-blue-primary rounded-full mt-10" /> */}
            <div className="w-xl h-15 border border-blue-primary rounded-full mt-10 flex p-1 gap-2">
                <input type="text" name="solver" id="solver" className="w-full h-full  px-4 rounded-full outline-none placeholder:text-gray-500 placeholder:font-outfit text-gray-700" placeholder="Try: solve x^2 + 5x + 6 = 0" />
                <button className="h-full bg-blue-primary rounded-full px-4 text-white font-semibold font-outfit text-nowrap">Solve Equation</button>
            </div>

            <div className="w-full md:max-w-[768px] lg:max-w-[1024px]  mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10 gap-6">
                <div className="bg-blue-500 h-[300px] rounded-xl relative overflow-hidden">
                    <img src="/calculus.webp" alt="img-banner" className="w-full h-full object-cover absolute" />

                    <div className="w-full h-full bg-black/50 relative z-20 p-6 flex flex-col justify-center items-center gap-2">
                        <div className="flex flex-col justify-center items-center">
                            <i className="fa-solid fa-square-root-variable text-white text-3xl"></i>
                            <p className="font-outfit text-white font-semibold text-2xl">Calculus</p>
                        </div>

                        <p className="font-outfit text-center text-white font-regular text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, dolorum!</p>
                    </div>
                </div>
                <div className="bg-blue-500 h-[300px] rounded-xl relative overflow-hidden">
                    <img src="/statistics.webp" alt="img-banner" className="w-full h-full object-cover absolute" />

                    <div className="w-full h-full bg-black/50 relative z-20 p-6 flex flex-col justify-center items-center gap-2">
                        <div className="flex flex-col justify-center items-center">
                            <i className="fa-solid fa-chart-line text-white text-3xl"></i>
                            <p className="font-outfit text-white font-semibold text-2xl">Statistic</p>
                        </div>

                        <p className="font-outfit text-center text-white font-regular text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, dolorum!</p>
                    </div>
                </div>
                <div className="bg-blue-500 h-[300px] rounded-xl relative overflow-hidden">
                    <img src="/unit-converter.webp" alt="img-banner" className="w-full h-full object-cover absolute" />

                    <div className="w-full h-full bg-black/50 relative z-20 p-6 flex flex-col justify-center items-center gap-2">
                        <div className="flex flex-col justify-center items-center">
                            {/* <i className="fa-solid fa-chart-line text-white text-3xl"></i> */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[30px] lucide lucide-ruler-icon lucide-ruler"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg>
                            <p className="font-outfit text-white font-semibold text-2xl">Unit Converter</p>
                        </div>

                        <p className="font-outfit text-center text-white font-regular text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, dolorum!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
