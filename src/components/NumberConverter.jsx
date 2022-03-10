import CalculatorFrame from "./CalculatorFrame.jsx";

export default function NumberConverter(props) {
  return (
    <CalculatorFrame title="Number Converter">
      <label htmlFor="number-from" className="block text-sm font-medium text-gray-700">
        From
      </label>
      <div className="flex items-stretch h-7">
        <input type="text" name="number-from" id="number-from" className="flex-grow px-1 border border-r-0 rounded-l-sm bg-gray-50 border-slate-500"></input>
        <select name="unit-from" id="unit-from" className="border rounded-r-sm bg-gray-50 h-7 border-slate-500">
          <option value="c">Binary</option>
          <option value="r">Decimal</option>
          <option value="k">Octal</option>
          <option value="f">Hex</option>
        </select>
      </div>
      <label htmlFor="unit-to" className="block text-sm font-medium text-gray-700">
        To
      </label>
      <div className="flex items-stretch h-7">
        <select name="unit-to" id="unit-to" className="flex-grow border rounded-r-sm bg-gray-50 h-7 border-slate-500">
          <option value="c">Binary</option>
          <option value="r">Decimal</option>
          <option value="k">Octal</option>
          <option value="f">Hex</option>
        </select>
      </div>
      <h3 className="pt-2">Result</h3>
      <div className="flex-grow border rounded-r-sm bg-gray-50 h-7 border-slate-500">

      </div>
    </CalculatorFrame>
  );
}
