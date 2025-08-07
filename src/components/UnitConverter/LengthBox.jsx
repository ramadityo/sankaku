import React, { useEffect, useRef, useState } from "react";
import { convertLength } from "../../lib/math";

export default function LengthBox() {
    const [fromUnit, setFromUnit] = useState("Kilometer");
    const [toUnit, setToUnit] = useState("Meter");
    const [fromValue, setFromValue] = useState(0);
    const [previewToValue, setPreviewToValue] = useState(0);
    const [toValue, setToValue] = useState(0);

    const [lengthUnits, setLengthUnits] = useState([
        {
            name: "Kilometer",
            symbol: "km",
        },
        {
            name: "Hectometer",
            symbol: "hm",
        },
        {
            name: "Decameter",
            symbol: "dam",
        },
        {
            name: "Meter",
            symbol: "m",
        },
        {
            name: "Centimeter",
            symbol: "cm",
        },
        {
            name: "Millimeter",
            symbol: "mm",
        },
        {
            name: "Micrometer",
            symbol: "μm",
        },
        {
            name: "Nanometer",
            symbol: "nm",
        },
        {
            name: "Picometer",
            symbol: "pm",
        },
        {
            name: "Inch",
            symbol: "in",
        },
        {
            name: "Foot",
            symbol: "ft",
        },
        {
            name: "Yard",
            symbol: "yd",
        },
        {
            name: "Light Year",
            symbol: "ly",
        },
        {
            name: "Astronomical Unit",
            symbol: "au",
        },
    ]);

    const handleConvert = () => {
        const resultValue = convertLength(fromValue, fromUnit, toUnit);

        const formattedValue = resultValue.toLocaleString("en-US", { maximumFractionDigits: 6 });
        setToValue(resultValue);
        setPreviewToValue(formattedValue);
    };

    useEffect(() => {
        handleConvert();
    }, [fromValue, fromUnit, toUnit]);

    return (
        <div className="mt-10 w-full h-[50vh] p-10 rounded-xl border border-blue-secondary shadow-xl flex gap-6 items-center">
            <div className="flex-1 flex flex-col justify-center gap-6">
                <div className="h-max flex-1">
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
                            <p className="font-outfit text-blue-primary font-bold">{lengthUnits.find((unit) => unit.name === fromUnit)?.symbol}</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-end">
                        <select name="fromUnit" id="fromUnit" className="py-2 outline-none" value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
                            {lengthUnits.map((unit, index) => (
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
                            <p className="font-outfit text-white font-bold">{lengthUnits.find((unit) => unit.name === toUnit)?.symbol}</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-end relative">
                        <select name="toUnit" id="toUnit" className="outline-none py-2 text-right" value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
                            {lengthUnits.map((unit, index) => (
                                <option key={index} value={unit.name}>
                                    {unit.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-blue-primary rounded-xl h-full">
                <div className="p-6 text-white">
                    <h3 className="font-outfit text-2xl font-bold mb-4">Length Conversion Info</h3>
                    <p className="font-outfit text-lg mb-2">This tool allows you to convert between different units of length with high precision. Simply enter the value and select the units you wish to convert from and to.</p>
                    <h4 className="font-outfit text-xl font-semibold mt-4 mb-2">Examples:</h4>
                    <ul className="list-disc list-inside">
                        <li>1 Meter = 100 Centimeters</li>
                        <li>1 Kilometer = 0.621371 Miles</li>
                        <li>1 Inch = 2.54 Centimeters</li>
                        <li>1 Foot = 0.3048 Meters</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
