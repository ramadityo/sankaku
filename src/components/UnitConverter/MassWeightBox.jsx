import React, { useEffect, useRef, useState } from "react";
import { convertMass } from "../../lib/math";
import { motion as m } from "framer-motion";

export default function MassWeightBox() {
    const [fromUnit, setFromUnit] = useState("Kilogram");
    const [toUnit, setToUnit] = useState("Gram");
    const [fromValue, setFromValue] = useState(0);
    const [previewToValue, setPreviewToValue] = useState(0);
    const [toValue, setToValue] = useState(0);

    const [weightUnits, setWeightUnits] = useState([
        {
            name: "Tonne",
            symbol: "t",
        },
        {
            name: "Kilogram",
            symbol: "kg",
        },
        {
            name: "Hektogram",
            symbol: "hg",
        },
        {
            name: "Dekagram",
            symbol: "dag",
        },
        {
            name: "Gram",
            symbol: "g",
        },
        {
            name: "Desigram",
            symbol: "dg",
        },
        {
            name: "Centigram",
            symbol: "cg",
        },
        {
            name: "Miligram",
            symbol: "mg",
        },
        {
            name: "Microgram",
            symbol: "μg",
        },
        {
            name: "Quintal",
            symbol: "q",
        },
        {
            name: "Pound",
            symbol: "lb",
        },
    ]);

    const handleConvert = () => {
        const resultValue = convertMass(fromValue, fromUnit, toUnit);

        const formattedValue = resultValue.toLocaleString("en-US", { maximumFractionDigits: 6 });
        setToValue(resultValue);
        setPreviewToValue(formattedValue);
    };

    useEffect(() => {
        handleConvert();
    }, [fromValue, fromUnit, toUnit]);

    function easeOutQuint(x) {
        return 1 - Math.pow(1 - x, 5);
    }

    return (
        <div className="mt-10 w-full min-h-[50vh] max-md:flex-col p-10 rounded-xl border border-blue-secondary shadow-xl flex gap-6 items-center">
            <div className="flex-1 flex flex-col justify-center gap-6 max-md:w-full">
                <div className="h-max flex-1 ">
                    <p className="font-outfit text-gray-700 text-xl mb-2">From</p>
                    <div className="relative">
                        <input
                            className="w-full outline-none border border-blue-secondary py-3 px-4 font-outfit text-gray-900 rounded-xl"
                            type="text"
                            name="fromValue"
                            id="fromValue"
                            value={fromValue}
                            onChange={(e) => {
                                setFromValue(e.target.value);
                            }}
                        />
                        <div className="absolute right-0 top-0 bottom-0 flex items-center pr-4">
                            <p className="font-outfit text-blue-primary font-bold">{weightUnits.find((unit) => unit.name === fromUnit)?.symbol}</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-end">
                        <select name="fromUnit" id="fromUnit" className="py-2 outline-none text-right" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
                            {weightUnits.map((unit, index) => (
                                <option key={index} value={unit.name}>
                                    {unit.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className="w-full flex justify-center ">
                    <button
                        className="cursor-pointer bg-linear-to-l from-blue-primary to-blue-secondary w-[40px] h-[40px] rounded-full"
                        onClick={(e) => {
                            e.currentTarget.classList.toggle("animate-rotateSwap");
                            setFromUnit(toUnit);
                            setToUnit(fromUnit);
                            setFromValue(toValue);
                            setToValue(fromValue);
                        }}
                    >
                        <i className="fa-solid fa-arrow-right-arrow-left text-white rotate-90"></i>
                    </button>
                </div>
                <div className=" h-max flex-1">
                    <p className="font-outfit text-gray-700 text-xl mb-2">To</p>
                    <div className="relative">
                        <input disabled className="disabled:cursor-not-allowed w-full outline-none bg-blue-primary border border-blue-primary py-3 px-4 font-outfit text-white rounded-xl" value={previewToValue} type="text" name="toValue" id="toValue" />

                        <div className="absolute right-0 top-0 bottom-0 flex items-center pr-4">
                            <p className="font-outfit text-white font-bold">{weightUnits.find((unit) => unit.name === toUnit)?.symbol}</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-end relative">
                        <select name="toUnit" id="toUnit" className="outline-none py-2 text-right" value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                            {weightUnits.map((unit, index) => (
                                <option key={index} value={unit.name}>
                                    {unit.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="py-10 px-6 relative overflow-hidden flex-1 flex items-center bg-blue-primary rounded-xl h-full">
                <div className="text-white relative z-20">
                    <h3 className="font-outfit text-2xl font-bold mb-4">Do you know?</h3>
                    <p className="font-outfit text-lg mb-2">Ever wonder why recipes use grams for flour, but scales use kilograms for weight?
That's because mass has many scales — from as fine as coffee grounds to as heavy as a fully loaded truck.
The trick is simple: for each step up or down, multiply by 10 or divide by 10.</p>
                    <h4 className="font-outfit text-xl font-semibold mt-4 mb-2">Examples:</h4>
                    <ul className="list-disc list-inside">
                        <li>1 Kilogram = 1000 Grams</li>
                        <li>1 Pound = 0.45359237 Kilograms</li>
                        <li>1 Ton = 1000 Kilograms</li>
                        <li>1 Ounce = 28.3495 Grams</li>
                    </ul>
                </div>

                <m.div initial={{ opacity: 0.5, translateX: 50, translateY: 1000, rotate: 50 }} animate={{ opacity: 0.5, translateX: 0, translateY: 0, rotate: 12, transition: { duration: 1.5, delay: 0.5, ease: easeOutQuint } }} className="absolute z-10 -bottom-16 -right-20 w-[300px] ">
                    <img src="/bocchi.webp" className="w-[300px]" alt="" />
                </m.div>
            </div>
        </div>
    );
}
