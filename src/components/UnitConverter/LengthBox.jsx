import React, {useState} from 'react'

export default function LengthBox() {

  const [fromUnit, setFromUnit] = useState(0);
  const [toUnit, setToUnit] = useState(0);
  const [fromValue, setFromValue] = useState(0);
  const [toValue, setToValue] = useState(0);

  const [lengthUnits, setLengthUnits] = useState([
    {
      name: "Meter",
      symbol: "m",
    },
    {
      name: "Kilometer",
      symbol: "km",
    },
    {
      name: "Centimeter",
      symbol: "cm",
    },
    {
      name: "Millimeter",
      symbol: "mm",
    },
  ])

  return (
    <div className='mt-10 w-full h-[50vh] p-10 rounded-xl border border-blue-secondary flex'>
      <div className='h-max flex-1'>
        <p className='font-outfit text-gray-700 text-xl'>From</p>
        <input className='w-full runded-md outline-none border border-blue-secondary' type="text" name="fromValue" id="fromValue" onChange={(e) => setFromValue(e.target.value)} />
        <select name="fromUnit" id="fromUnit" className='w-full'>
          {
            lengthUnits.map((unit, index) => (
              <option key={index} value={unit.symbol}>{unit.name}</option>
            ))
          }
        </select>
      </div>
      <div>

      </div>
      <div className='bg-yellow-500 h-max flex-1'>
        <p className='font-outfit text-gray-700 text-2xl'>To</p>
        <input className='w-full' type="text" name="fromValue" id="fromValue" onChange={(e) => setFromValue(e.target.value)} />
      </div>
    </div>
  )
}
