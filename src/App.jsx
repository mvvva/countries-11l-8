import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Countries from "./pages/Countries";
import Header from "./components/Header";
import { useState } from "react";
import SingleCountry from "./pages/SingleCountry";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import LineChart from "./pages/chart/LineChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Router>
        <Header setIsOpen={setIsOpen} />
        <Routes>
          <Route
            path='/'
            element={<Countries isOpen={isOpen} setIsOpen={setIsOpen} />}
          />
          <Route path='/country/:id' element={<SingleCountry />} />
          <Route path='/chart' element={<LineChart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
