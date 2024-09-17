"use client";
import React from "react";
import { Button, Drawer, Avatar } from "flowbite-react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { XMarkIcon } from '@heroicons/react/24/solid';
import { unSelectCountry } from "../store/countriesSlice";

export function CountriesDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const selectedCountries = useSelector((state) => state.countries.selectedCountries);
  const dispatch = useDispatch();

  const handleClose = () => setIsOpen(false);

  const handleUnselect = (cca2) => {
    dispatch(unSelectCountry(cca2));
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <Button onClick={() => setIsOpen(true)}>Selected countries</Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose} position="right">
        <Drawer.Header title="Selected countries">
          <h5 className="text-base font-semibold text-gray-800 dark:text-white">
            Selected Countries ({selectedCountries.length})
          </h5>
        </Drawer.Header>
        <Drawer.Items>
          {selectedCountries.length === 0 ? (
            <p className="text-gray-500">No countries selected</p>
          ) : (
            <ul className="space-y-4">
              {selectedCountries.map((country) => (
                <li key={country.cca2} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar img={country.flagURL} size="sm" rounded />
                    <span className="font-medium">{country.name}</span>
                  </div>
                  
                    <XMarkIcon 
                    onClick={() => handleUnselect(country.cca2)}
                    className="pointer w-4 h-4 " />
                </li>
              ))}
            </ul>
          )}
        </Drawer.Items>
      </Drawer>
    </>
  );
}