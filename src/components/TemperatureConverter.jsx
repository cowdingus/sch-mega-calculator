import CalculatorFrame from "./CalculatorFrame"

export default function TemperatureConverter(props) {
  return (
    <CalculatorFrame title="Temperature Converter">
      <label htmlFor="temperature-from" className="block text-sm font-medium text-gray-700">
        From
      </label>
      <div className="flex items-stretch h-7">
        <input type="text" id="temperature-from" name="temperature-from" className="flex-grow px-1 border border-r-0 rounded-l-sm bg-gray-50 border-slate-500"></input>
        <select name="unit-from" id="unit-from" className="border rounded-r-sm bg-gray-50 w-9 h-7 border-slate-500">
          <option value="c">C</option>
          <option value="r">R</option>
          <option value="k">K</option>
          <option value="f">F</option>
        </select>
      </div>
      <label htmlFor="temperature-to" className="block text-sm font-medium text-gray-700">
        To
      </label>
      <div className="flex items-stretch h-7">
        <input type="text" id="temperature-to" name="temperature-to" className="flex-grow px-1 border border-r-0 rounded-l-sm bg-gray-50 border-slate-500"></input>
        <select name="unit-to" id="unit-to" className="border rounded-r-sm bg-gray-50 w-9 h-7 border-slate-500">
          <option value="c">C</option>
          <option value="r">R</option>
          <option value="k">K</option>
          <option value="f">F</option>
        </select>
      </div>
    </CalculatorFrame>
  );
}
