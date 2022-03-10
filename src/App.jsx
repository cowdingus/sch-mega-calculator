import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen App">
      <Navbar />
      <main className="flex flex-wrap justify-between flex-grow p-16 lg:flex-nowrap md:space-x-20 bg-gray-50 gap-4">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
