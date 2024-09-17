import { CountriesDrawer } from "./ChosenCountries";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="max-w-[1140px] flex justify-around items-center bg-gray-200 mx-auto p-2 px-4 rounded-md mb-2 shadow-lg">
      <Link
        to="/"
        className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300"
      >
        Home
      </Link>
      <Link
        to="/chart"
        className="text-lg font-medium text-gray-700 hover:text-blue-600 transition duration-300"
      >
        Chart bar
      </Link>
      <CountriesDrawer />
    </div>
  );
}
