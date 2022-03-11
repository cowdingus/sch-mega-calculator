import CalculatorFrame from "./CalculatorFrame";

import { useState, useEffect } from "react";

export default function TemperatureConverter(props) {
  const [temperature, setTemperature] = useState(0);
  const [sourceUnit, setSourceUnit] = useState("c");
  const [targetUnit, setTargetUnit] = useState("f");

  const calculateResult = () => {

  };

  const changeTemperature = (e) => {
    e.preventDefault();

    setTemperature(e.target.value);
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
    <CalculatorFrame title="Temperature Converter">
      <label
        htmlFor="temperature-from"
        className="block text-sm font-medium text-gray-700"
      >
        From
      </label>
      <div className="flex items-stretch h-7">
        <input
          type="number"
          id="temperature-from"
          name="temperature-from"
          value={temperature}
          onChange={changeTemperature}
          className="flex-grow px-1 border border-r-0 rounded-l-sm bg-gray-50 border-slate-500"
        ></input>
        <select
          name="unit-from"
          id="unit-from"
          value={sourceUnit}
          onChange={changeSourceUnit}
          className="border rounded-r-sm bg-gray-50 border-slate-500"
        >
          <option value="c">°C</option>
          <option value="r">°R</option>
          <option value="k">°K</option>
          <option value="f">°F</option>
        </select>
      </div>
      <label
        htmlFor="temperature-to"
        className="block text-sm font-medium text-gray-700"
      >
        To
      </label>
      <div className="flex items-stretch h-7">
        <div className="flex-grow px-1 border border-r-0 rounded-l-sm bg-gray-50 border-slate-500"></div>
        <select
          name="unit-to"
          id="unit-to"
          value={targetUnit}
          onChange={changeTargetUnit}
          className="border rounded-r-sm bg-gray-50 border-slate-500"
        >
          <option value="c">°C</option>
          <option value="r">°R</option>
          <option value="k">°K</option>
          <option value="f">°F</option>
        </select>
      </div>
    </CalculatorFrame>
  );
}
