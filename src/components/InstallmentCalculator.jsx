import CalculatorFrame from "./CalculatorFrame.jsx";

import { useState, useEffect } from "react";

export default function InstallmentCalculator(props) {
  const [nominal, setNominal] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [period, setPeriod] = useState("12");
  const [result, setResult] = useState("");

  const calculateResult = () => {
    if (!nominal || !interestRate) return;

    const periode = parseInt(period);
    const result = nominal / periode + ((nominal / periode) * (interestRate / 100));

    setResult(`Rp${result},00`);
  };

  useEffect(() => {
    calculateResult();
  }, [nominal, interestRate, period]);

  const changeNominal = (e) => {
    e.preventDefault();

    setNominal(parseInt(e.target.value));
  };

  const changeInterestRate = (e) => {
    e.preventDefault();

    setInterestRate(parseFloat(e.target.value));
  };

  const changePeriod = (e) => {
    e.preventDefault();

    setPeriod(e.target.value);
  };

  return (
    <CalculatorFrame title="Installment Calculator">
      <label
        htmlFor="nominal"
        className="block text-sm font-medium text-gray-700"
      >
        Nominal
      </label>
      <div className="flex items-stretch h-7">
        <input
          type="number"
          name="nominal"
          id="nominal"
          value={nominal}
          onChange={changeNominal}
          className="flex-grow px-1 border rounded-l-sm bg-gray-50 border-slate-500"
        ></input>
      </div>
      <label
        htmlFor="interest"
        className="block text-sm font-medium text-gray-700"
      >
        Interest Rate
      </label>
      <div className="flex items-stretch h-7">
        <input
          type="number"
          name="interest"
          id="interest"
          value={interestRate}
          onChange={changeInterestRate}
          className="flex-grow px-1 border rounded-l-sm bg-gray-50 border-slate-500"
        ></input>
      </div>
      <label
        htmlFor="period"
        className="block text-sm font-medium text-gray-700"
      >
        Period
      </label>
      <div className="flex items-stretch h-7">
        <select
          name="unit-to"
          id="unit-to"
          value={period}
          onChange={changePeriod}
          className="flex-grow border rounded-r-sm bg-gray-50 h-7 border-slate-500"
        >
          <option value="3">3 Bulan</option>
          <option value="6">6 Bulan</option>
          <option value="12">12 Bulan</option>
        </select>
      </div>
      <h3 className="pt-2">Result</h3>
      <div className="flex-grow border rounded-r-sm bg-gray-50 h-7 border-slate-500">{result}</div>
    </CalculatorFrame>
  );
}
