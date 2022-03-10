import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './index.css';
import App from './App';
import TemperatureConverterPage from './routes/TemperatureConverterPage';
import NumberConverterPage from './routes/NumberConverterPage';
import BMICalculatorPage from './routes/BMICalculatorPage';
import InstallmentCalculatorPage from './routes/InstallmentCalculatorPage';
import TotalPriceCalculatorPage from './routes/TotalPriceCalculatorPage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="temperature" element={<TemperatureConverterPage />} />
          <Route path="number" element={<NumberConverterPage />} />
          <Route path="bmi" element={<BMICalculatorPage />} />
          <Route path="installment" element={<InstallmentCalculatorPage />} />
          <Route path="totalprice" element={<TotalPriceCalculatorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
