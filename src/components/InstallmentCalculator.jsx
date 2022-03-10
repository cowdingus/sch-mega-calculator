import CalculatorFrame from "./CalculatorFrame.jsx";

export default function InstallmentCalculator(props) {
  return (
    <CalculatorFrame title="Installment Calculator">
      <label htmlFor="nominal" className="block text-sm font-medium text-gray-700">
        Nominal
      </label>
      <div className="flex items-stretch h-7">
        <input type="text" name="nominal" id="nominal" className="flex-grow px-1 border rounded-l-sm bg-gray-50 border-slate-500"></input>
      </div>
      <label htmlFor="interest" className="block text-sm font-medium text-gray-700">
        Interest Rate
      </label>
      <div className="flex items-stretch h-7">
        <input type="text" name="interest" id="interest" className="flex-grow px-1 border rounded-l-sm bg-gray-50 border-slate-500"></input>
      </div>
      <label htmlFor="period" className="block text-sm font-medium text-gray-700">
        Period
      </label>
      <div className="flex items-stretch h-7">
        <input type="text" name="period" id="period" className="flex-grow px-1 border rounded-l-sm bg-gray-50 border-slate-500"></input>
      </div>
      <h3 className="pt-2">Result</h3>
      <div className="flex-grow border rounded-r-sm bg-gray-50 h-7 border-slate-500">

      </div>
    </CalculatorFrame>
  );
}
