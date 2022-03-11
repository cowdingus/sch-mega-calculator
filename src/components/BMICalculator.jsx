import CalculatorFrame from "./CalculatorFrame.jsx";

import { useState, useEffect } from "react";

export default function BMICalculator(props) {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState("");

  const calculateResult = () => {
    if (!weight || !height) return;

    const bmi = weight / ((height / 100) ** 2);

    if (bmi < 18.5) setResult("Kekurangan berat badan");
    else if (bmi >= 18.5 && bmi <= 24.9) setResult("Normal (ideal)");
    else if (bmi >= 25.0 && bmi <= 29.9) setResult("Kelebihan berat badan");
    else return setResult("Kegemukan (Obesitas)");
  }

  useEffect(() => {
    calculateResult();
  }, [weight, height]);

  const changeHeight = (e) => {
    e.preventDefault();

    setHeight(parseFloat(e.target.value));
  }

  const changeWeight = (e) => {
    e.preventDefault();

    setWeight(parseFloat(e.target.value));
  };

  return (
    <CalculatorFrame title="Body Mass Index">
      <label
        htmlFor="height"
        className="block text-sm font-medium text-gray-700"
      >
        Height
      </label>
      <div className="flex items-stretch h-7">
        <input
          type="number"
          name="height"
          id="height "
          value={height}
          onChange={changeHeight}
          className="flex-grow px-1 border rounded-l-sm bg-gray-50 border-slate-500"
        ></input>
      </div>
      <label
        htmlFor="weight"
        className="block text-sm font-medium text-gray-700"
      >
        Weight
      </label>
      <div className="flex items-stretch h-7">
        <input
          type="number"
          name="weight"
          id="weight"
          value={weight}
          onChange={changeWeight}
          className="flex-grow px-1 border rounded-l-sm bg-gray-50 border-slate-500"
        ></input>
      </div>
      <h3 className="pt-2">Result</h3>
      <div className="flex-grow border rounded-r-sm bg-gray-50 h-7 border-slate-500">{result}</div>
    </CalculatorFrame>
  );
}
