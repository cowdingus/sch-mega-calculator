import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <header className="relative z-50 flex-none py-5 bg-white ring-1 ring-gray-900 ring-opacity-5 shadow-sm">
      <nav className="w-full px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center text-sm font-semibold text-slate-700 leading-6 sm:flex-nowrap space-x-8">
          <Link to="/bmi" className="hover:text-sky-500">BMI</Link>
          <Link to="/number" className="hover:text-sky-500">Number</Link>
          <Link to="/temperature" className="hover:text-sky-500">Temperature</Link>
          <Link to="/installment" className="hover:text-sky-500">Cicilan</Link>
          <Link to="/totalprice" className="hover:text-sky-500">Total</Link>
        </div>
      </nav>
    </header>
  );
}
