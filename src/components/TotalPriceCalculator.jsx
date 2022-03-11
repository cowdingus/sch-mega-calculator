import CalculatorFrame from "./CalculatorFrame.jsx";

import { useState, useEffect } from "react";

export default function TotalPriceCalculator(props) {
  const [price, setPrice] = useState(0);
  const [ppn, setPpn] = useState(10);
  const [discount, setDiscount] = useState(0);
  const [result, setResult] = useState(0);

  const calculateResult = () => {
    const discountTotal = price * (discount / 100);
    const priceAfterDiscount = price - discountTotal;
    const tax = priceAfterDiscount * (ppn / 100);
    const priceTotal = priceAfterDiscount + tax;

    setResult(`Rp ${priceTotal},00`);
  }

  useEffect(() => {
    calculateResult();
  }, [price, ppn, discount]);

  const changePrice = (e) => {
    e.preventDefault();

    setPrice(e.target.value);
  }

  const changePpn = (e) => {
    e.preventDefault();

    setPpn(e.target.value);
  }

  const changeDiscount = (e) => {
    e.preventDefault();

    setDiscount(e.target.value);
  }

  return (
    <CalculatorFrame title="Taxed Price Calculator">
      <label
        htmlFor="initial-price"
        className="block text-sm font-medium text-gray-700"
      >
        Initial Price
      </label>
      <div className="flex items-stretch h-7">
        <input
          type="number"
          name="initial-price"
          id="initial-price"
          value={price}
          onChange={changePrice}
          className="flex-grow px-1 border rounded-l-sm bg-gray-50 border-slate-500"
        ></input>
      </div>
      <label htmlFor="ppn" className="block text-sm font-medium text-gray-700">
        PPN
      </label>
      <div className="flex items-stretch h-7">
        <input
          type="number"
          name="ppn"
          id="ppn"
          value={ppn}
          onChange={changePpn}
          className="flex-grow px-1 border rounded-l-sm bg-gray-50 border-slate-500"
        ></input>
      </div>
      <label
        htmlFor="discount"
        className="block text-sm font-medium text-gray-700"
      >
        Discount Percentage
      </label>
      <div className="flex items-stretch h-7">
        <input
          type="number"
          name="discount"
          id="discount"
          value={discount}
          onChange={changeDiscount}
          className="flex-grow px-1 border rounded-l-sm bg-gray-50 border-slate-500"
        ></input>
      </div>
      <h3 className="pt-2">Result</h3>
      <div className="flex-grow border rounded-r-sm bg-gray-50 h-7 border-slate-500">{result}</div>
    </CalculatorFrame>
  );
}
