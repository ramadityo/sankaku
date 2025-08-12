import React, { useEffect, useState } from "react";
import { convertArea } from "../../lib/math";
import { motion as m } from "framer-motion";

// Constants for area units
const AREA_UNITS = [
    { name: "Square Millimeter", symbol: "mm²" },
    { name: "Square Centimeter", symbol: "cm²" },
    { name: "Square Decimeter", symbol: "dm²" },
    { name: "Square Meter", symbol: "m²" },
    { name: "Are", symbol: "a" },
    { name: "Hectare", symbol: "ha" },
    { name: "Square Kilometer", symbol: "km²" },
    { name: "Square Inch", symbol: "in²" },
    { name: "Square Foot", symbol: "ft²" },
    { name: "Square Yard", symbol: "yd²" },
    { name: "Acre", symbol: "ac" },
    { name: "Square Mile", symbol: "mile²" },
];

// Animation easing function
function easeOutQuint(x) {
    return 1 - Math.pow(1 - x, 5);
}

const ConversionInput = ({ label, value, onChange, unit, onUnitChange, units, disabled = false, isResult = false }) => {
    const currentSymbol = units.find((u) => u.name === unit)?.symbol;

    return (
        <div className="h-max flex-1">
            <p className="font-outfit text-gray-700 text-xl mb-2">{label}</p>
            <div className="relative">
                <input className={`w-full outline-none border ${isResult ? "bg-blue-primary border-blue-primary text-white" : "border-blue-secondary text-gray-900"} py-3 px-4 font-outfit rounded-xl`} type="text" value={value} onChange={onChange} disabled={disabled} />
                <div className="absolute right-0 top-0 bottom-0 flex items-center pr-4">
                    <p className={`font-outfit ${isResult ? "text-white" : "text-blue-primary"} font-bold`}>{currentSymbol}</p>
                </div>
            </div>
            <div className="w-full flex justify-end">
                <select name="unit" className="py-2 outline-none text-right" value={unit} onChange={onUnitChange} disabled={disabled}>
                    {units.map((unit, index) => (
                        <option key={index} value={unit.name}>
                            {unit.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

const SwapButton = ({ onClick }) => (
    <div className="w-full flex justify-center">
        <button className="cursor-pointer bg-linear-to-l from-blue-primary to-blue-secondary w-[40px] h-[40px] rounded-full" onClick={onClick}>
            <i className="fa-solid fa-arrow-right-arrow-left text-white rotate-90"></i>
        </button>
    </div>
);

const InfoPanel = () => (
    <div className="py-10 px-6 relative overflow-hidden flex-1 flex items-center bg-blue-primary rounded-xl h-full">
        <div className="text-white relative z-20">
            <h3 className="font-outfit text-2xl font-bold mb-4">Do you know?</h3>
            <p className="font-outfit text-lg mb-2">Measuring area is easy, but converting units? Well, that can sometimes be confusing!<br />
            Remember, if the length increases by one unit, the area increases by two units because area = length × width. So, 1 m² is much larger than 1 cm².</p>
            <h4 className="font-outfit text-xl font-semibold mt-4 mb-2">Examples:</h4>
            <ul className="list-disc list-inside font-outfit font-light">
                <li>1 mm² = 0.000001 m²</li>
                <li>1 cm² = 0.0001 m²</li>
                <li>1 dm² = 0.01 m²</li>
                <li>1 m² = 1 m²</li>
            </ul>
        </div>

        <m.div
            initial={{ opacity: 0.5, translateX: 0, translateY: 1000, rotate: 0 }}
            animate={{
                opacity: 0.5,
                translateX: 0,
                translateY: 0,
                rotate: 0,
                transition: { duration: 1.5, delay: 0.5, ease: easeOutQuint },
            }}
            className="absolute z-10 -bottom-0 -right-0"
        >
            <img src="/area-anime.webp" className="w-[250px] rotate-y-180" alt="" />
        </m.div>
    </div>
);

export default function AreaBox() {
    const [fromUnit, setFromUnit] = useState("Square Millimeter");
    const [toUnit, setToUnit] = useState("Square Meter");
    const [fromValue, setFromValue] = useState(0);
    const [previewToValue, setPreviewToValue] = useState(0);
    const [toValue, setToValue] = useState(0);

    const handleConvert = () => {
        const resultValue = convertArea(fromValue, fromUnit, toUnit);
        const formattedValue = resultValue.toLocaleString("en-US", { maximumFractionDigits: 6 });
        setToValue(resultValue);
        setPreviewToValue(formattedValue);
    };

    const handleSwap = () => {
        setFromUnit(toUnit);
        setToUnit(fromUnit);
        setFromValue(toValue);
        setToValue(fromValue);
    };

    useEffect(() => {
        handleConvert();
    }, [fromValue, fromUnit, toUnit]);

    return (
        <div className="mt-10 w-full min-h-[50vh] max-md:flex-col p-10 rounded-xl border border-blue-secondary shadow-xl flex gap-6 items-center">
            <div className="flex-1 flex flex-col justify-center gap-6 max-md:w-full">
                <ConversionInput label="From" value={fromValue} onChange={(e) => setFromValue(e.target.value)} unit={fromUnit} onUnitChange={(e) => setFromUnit(e.target.value)} units={AREA_UNITS} />

                <SwapButton onClick={handleSwap} />

                <ConversionInput label="To" value={previewToValue} unit={toUnit} onUnitChange={(e) => setToUnit(e.target.value)} units={AREA_UNITS} disabled isResult />
            </div>

            <InfoPanel />
        </div>
    );
}
