import CalculatorFrame from "./CalculatorFrame.jsx";

export default function BMICalculator(props) {
  return (
    <CalculatorFrame title="Body Mass Index">
      <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
        Weight
      </label>
      <div className="flex items-stretch h-7">
        <input type="number" name="weight" id="weight" className="flex-grow px-1 border rounded-l-sm bg-gray-50 border-slate-500"></input>
      </div>
      <label htmlFor="height" className="block text-sm font-medium text-gray-700">
        Height
      </label>
      <div className="flex items-stretch h-7">
        <input type="number" name="height" id="height "className="flex-grow px-1 border rounded-l-sm bg-gray-50 border-slate-500"></input>
      </div>
      <h3 className="pt-2">Result</h3>
      <div className="flex-grow border rounded-r-sm bg-gray-50 h-7 border-slate-500">

      </div>
    </CalculatorFrame>
  );
}
