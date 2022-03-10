import CalculatorFrame from "./CalculatorFrame.jsx";

export default function TotalPriceCalculator(props) {
  return (
    <CalculatorFrame title="Total Price Calculator">
      <label htmlFor="initial-price" className="block text-sm font-medium text-gray-700">
        Initial Price
      </label>
      <div className="flex items-stretch h-7">
        <input type="text" name="initial-price" id="initial-price" className="flex-grow px-1 border rounded-l-sm bg-gray-50 border-slate-500"></input>
      </div>
      <label htmlFor="ppn" className="block text-sm font-medium text-gray-700">
        PPN
      </label>
      <div className="flex items-stretch h-7">
        <input type="text" name="ppn" id="ppn" className="flex-grow px-1 border rounded-l-sm bg-gray-50 border-slate-500"></input>
      </div>
      <label htmlFor="discount" className="block text-sm font-medium text-gray-700">
        Discount Percentage
      </label>
      <div className="flex items-stretch h-7">
        <input type="text" name="discount" id="discount" className="flex-grow px-1 border rounded-l-sm bg-gray-50 border-slate-500"></input>
      </div>
      <h3 className="pt-2">Result</h3>
      <div className="flex-grow border rounded-r-sm bg-gray-50 h-7 border-slate-500">

      </div>
    </CalculatorFrame>
  );
}
