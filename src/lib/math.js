// Unit Converter Functions

function convertLength(value, fromUnit, toUnit) {
    const conversionRates = {
        "Light Year": 9.461e15,
        "Astronomical Unit": 1.496e11,
        Inch: 0.0254,
        Foot: 0.3048,
        Yard: 0.9144,
        Mile: 1609.34,
        Picometer: 1e-12,
        Nanometer: 1e-9,
        Micrometer: 1e-6,
        Millimeter: 0.001,
        Centimeter: 0.01,
        Decimeter: 0.1,
        Meter: 1,
        Decameter: 10,
        Hectometer: 100,
        Kilometer: 1000,
    };

    if (!conversionRates[fromUnit] || !conversionRates[toUnit]) {
        throw new Error("Invalid units");
    }

    return (value * conversionRates[fromUnit]) / conversionRates[toUnit];
}

function convertMass(value, fromUnit, toUnit) {
    const conversionRates = {
        Tonne: 1000000,
        Quintal: 100000,
        Kilogram: 1_000,
        Hektogram: 100,
        Dekagram: 10,
        Gram: 1,
        Desigram: 0.1,
        Centigram: 0.01,
        Miligram: 0.001,
        Microgram: 0.000001,
        Pound: 453.59237,
    };

    if (!conversionRates[fromUnit] || !conversionRates[toUnit]) {
        throw new Error("Invalid units");
    }

    return (value * conversionRates[fromUnit]) / conversionRates[toUnit];
}

function convertTemp(value, fromUnit, toUnit) {
    const conversionRates = {
        Celcius: (temp) => temp,
        Farenheit: (temp) => (temp * 9) / 5 + 32,
        Kelvin: (temp) => temp + 273.15,
        Rankine: (temp) => (temp * 9) / 5 + 491.67,
        Reaumur: (temp) => (temp * 4) / 5,
    };

    if (!conversionRates[fromUnit] || !conversionRates[toUnit]) {
        throw new Error("Invalid units");
    }

    return conversionRates[toUnit](conversionRates[fromUnit](value));
}

function convertArea(value, fromUnit, toUnit) {
    const conversionRates = {
        "Square Millimeter": 1e-6, // 1 mm² = 0.000001 m²
        "Square Centimeter": 1e-4, // 1 cm² = 0.0001 m²
        "Square Decimeter": 0.01, // 1 dm² = 0.01 m²
        "Square Meter": 1, // 1 m² = 1 m²
        "Are": 100, // 1 are = 100 m²
        "Hectare": 10000, // 1 ha = 10,000 m²
        "Square Kilometer": 1000000, // 1 km² = 1,000,000 m²
        "Square Inch": 0.00064516, // 1 in² ≈ 0.00064516 m²
        "Square Foot": 0.09290304, // 1 ft² ≈ 0.09290304 m²
        "Square Yard": 0.83612736, // 1 yd² ≈ 0.83612736 m²
        "Acre": 4046.8564224, // 1 acre ≈ 4,046.8564224 m²
        "Square Mile": 2589988.110336, // 1 mi² ≈ 2,589,988.110336 m²
    };

    if (!conversionRates[fromUnit] || !conversionRates[toUnit]) {
        throw new Error("Invalid units");
    }

    return (value * conversionRates[fromUnit]) / conversionRates[toUnit];
}

export { convertLength, convertMass, convertTemp, convertArea };
