"use client";

import { Carousel } from "flowbite-react";
import { useSelector } from "react-redux";

export default function HeroSection() {
  const selectedCountries = useSelector((state) => state.countries.selectedCountries);

  const groupedCountries = selectedCountries.reduce((acc, country, index) => {
    const groupIndex = Math.floor(index / 4);
    if (!acc[groupIndex]) {
      acc[groupIndex] = [];
    }
    acc[groupIndex].push(country);
    return acc;
  }, []);

  return (
    <div className="h-44 sm:h-64 xl:h-80 2xl:h-96 ">
      {selectedCountries.length > 0 ? (
        <Carousel>
          {groupedCountries.map((group, groupIndex) => (
            <div key={groupIndex} className="flex justify-center items-center h-full bg-gray-100">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
                {group.map((country) => (
                  <div key={country.cca2} className="flex flex-col items-center">
                    <img 
                      src={country.flagURL} 
                      alt={`Flag of ${country.name}`} 
                      className="w-48 h-28 object-cover rounded shadow"
                    />
                    <p className="mt-2 text-center font-semibold text-sm">{country.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="flex justify-center items-center h-full bg-gray-100">
          <p className="text-xl font-semibold text-gray-500">No countries selected</p>
        </div>
      )}
    </div>
  );
  
}