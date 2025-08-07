import React, { useState } from "react";
// 1. Import motion dan AnimatePresence dari framer-motion
import { motion, AnimatePresence } from "framer-motion"; 

import LengthBox from "./components/UnitConverter/LengthBox";
import MassWeightBox from "./components/UnitConverter/MassWeightBox";
import TempBox from "./components/UnitConverter/TempBox";
import AreaBox from "./components/UnitConverter/AreaBox";
import VolumeBox from "./components/UnitConverter/VolumeBox";
import EnergyBox from "./components/UnitConverter/EnergyBox";

export default function UnitConverter() {
    const [activeState, setActiveState] = useState(0);

    const units = [
        { name: "Length", id: 0, componentName: <LengthBox /> },
        { name: "Mass & Weight", id: 1, componentName: <MassWeightBox /> },
        { name: "Temperature", id: 2, componentName: <TempBox /> },
        { name: "Area", id: 3, componentName: <AreaBox /> },
        { name: "Volume", id: 4, componentName: <VolumeBox /> },
        { name: "Energy", id: 5, componentName: <EnergyBox /> },
    ];

    // 2. (Opsional tapi direkomendasikan) Definisikan varian animasi
    const variants = {
        enter: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        exit: {
            opacity: 0,
            y: -20, // Bergerak sedikit ke atas saat menghilang
            transition: {
                duration: 0.2,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="w-full">
            <div className="space-y-2">
                <p className="font-outfit text-5xl text-blue-primary text-center font-bold">Unit Converter</p>
                <p className="font-outfit text-xl font-light text-gray-600 text-center">Convert between different units of measurement with precision and ease.</p>
            </div>
            <div className="container mx-auto flex p-2 bg-gray-100 rounded-full mt-10">
                {units.map((unit) => (
                    <button key={unit.id} className={`cursor-pointer transition-all font-outfit text-gray-700 px-4 py-2 rounded-full flex-1 ${activeState === unit.id ? "bg-blue-primary text-white" : ""}`} onClick={() => setActiveState(unit.id)}>
                        {unit.name}
                    </button>
                ))}
            </div>

            <div className="container mx-auto mt-8">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeState}
                        variants={variants}
                        initial="exit"
                        animate="enter"
                        exit="exit"
                    >
                        {units[activeState].componentName}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}