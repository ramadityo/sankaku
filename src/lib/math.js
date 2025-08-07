// Unit Converter Functions

function convertLength(value, fromUnit, toUnit) {
  const conversionRates = {
    "Light Year": 9.461e15,
    "Astronomical Unit": 1.496e11,
    "Inch": 0.0254,
    "Foot": 0.3048,
    "Yard": 0.9144,
    "Mile": 1609.34,
    "Picometer": 1e-12,
    "Nanometer": 1e-9,
    "Micrometer": 1e-6,
    "Millimeter": 0.001,
    "Centimeter": 0.01,
    "Decimeter": 0.1,
    "Meter": 1,
    "Decameter": 10,
    "Hectometer": 100,
    "Kilometer": 1000
  };

  if (!conversionRates[fromUnit] || !conversionRates[toUnit]) {
    throw new Error("Invalid units");
  }

  return (value * conversionRates[fromUnit]) / conversionRates[toUnit];
}

function convertMass(value, fromUnit, toUnit) {
  const conversionRates = {
    "Tonne": 1000000,       
    "Quintal": 100000,        
    "Kilogram": 1_000,         
    "Hektogram": 100,         
    "Dekagram": 10,           
    "Gram": 1,                
    "Desigram": 0.1,           
    "Centigram": 0.01,         
    "Miligram": 0.001,         
    "Microgram": 0.000001,     
    "Pound": 453.59237         
  };

  if (!conversionRates[fromUnit] || !conversionRates[toUnit]) {
    throw new Error("Invalid units");
  }

  return (value * conversionRates[fromUnit]) / conversionRates[toUnit];
}

export { convertLength, convertMass };
