import CalculatorFrame from "./CalculatorFrame.jsx";

import { useState, useEffect } from "react";

export default function NumberConverter(props) {
  const [number, setNumber] = useState("0");
  const [result, setResult] = useState("0");
  const [sourceUnit, setSourceUnit] = useState("decimal");
  const [targetUnit, setTargetUnit] = useState("binary");

  const calculateResult = () => {
    const radixMap = {
      binary: 2,
      decimal: 10,
      octal: 8,
      hex: 16,
    };

    const numberInDecimal = parseInt(number, radixMap[sourceUnit]);

    setResult(numberInDecimal.toString(radixMap[targetUnit]));
  };

  useEffect(() => {
    calculateResult();
  }, [number, sourceUnit, targetUnit]);

  const changeNumber = (e) => {
    e.preventDefault();

    setNumber(e.target.value);
  };

  const changeSourceUnit = (e) => {
    e.preventDefault();

    setSourceUnit(e.target.value);
  };

  const changeTargetUnit = (e) => {
    e.preventDefault();

    setTargetUnit(e.target.value);
  };

  return (
    <CalculatorFrame title="Number Converter">
      <label
        htmlFor="number-from"
        className="block text-sm font-medium text-gray-700"
      >
        From
      </label>
      <div className="flex items-stretch h-7">
        <input
          type="text"
          name="number-from"
          id="number-from"
          value={number}
          onChange={changeNumber}
          className="flex-grow px-1 border border-r-0 rounded-l-sm bg-gray-50 border-slate-500"
        ></input>
        <select
          name="unit-from"
          id="unit-from"
          value={sourceUnit}
          onChange={changeSourceUnit}
          className="border rounded-r-sm bg-gray-50 h-7 border-slate-500"
        >
          <option value="binary">Binary</option>
          <option value="decimal">Decimal</option>
          <option value="octal">Octal</option>
          <option value="hex">Hex</option>
        </select>
      </div>
      <label
        htmlFor="unit-to"
        className="block text-sm font-medium text-gray-700"
      >
        To
      </label>
      <div className="flex items-stretch h-7">
        <div className="flex-grow px-1 border border-r-0 rounded-l-sm bg-gray-50 border-slate-500">{result}</div>
        <select
          name="unit-to"
          id="unit-to"
          value={targetUnit}
          onChange={changeTargetUnit}
          className="border rounded-r-sm bg-gray-50 h-7 border-slate-500"
        >
          <option value="binary">Binary</option>
          <option value="decimal">Decimal</option>
          <option value="octal">Octal</option>
          <option value="hex">Hex</option>
        </select>
      </div>
    </CalculatorFrame>
  );
}
