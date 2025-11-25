"use client";

import { useState, useMemo } from "react";
import SchoolCard from "./Card";

type University = {
  name: string;
  sector: string;
  city: string;
  link: string;
};

type Props = {
  universities: University[];
};

export default function UniversitiesFilter({ universities }: Props) {
  const [searchName, setSearchName] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedSector, setSelectedSector] = useState("");

  // Get unique cities and sort them
  const cities = useMemo(() => {
    const uniqueCities = Array.from(new Set(universities.map((u) => u.city)));
    return uniqueCities.sort();
  }, [universities]);

  // Filter universities based on search criteria
  const filteredUniversities = useMemo(() => {
    return universities.filter((university) => {
      const matchesName = university.name
        .toLowerCase()
        .includes(searchName.toLowerCase());
      const matchesCity = selectedCity === "" || university.city === selectedCity;
      const matchesSector =
        selectedSector === "" || university.sector === selectedSector;

      return matchesName && matchesCity && matchesSector;
    });
  }, [universities, searchName, selectedCity, selectedSector]);

  const clearFilters = () => {
    setSearchName("");
    setSelectedCity("");
    setSelectedSector("");
  };

  const hasActiveFilters = searchName || selectedCity || selectedSector;

  return (
    <div className="space-y-6">
      {/* Filter Section */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white flex items-center space-x-2">
            <i className="fas fa-filter text-blue-400"></i>
            <span>Filter Universities</span>
          </h2>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 flex items-center space-x-1"
            >
              <i className="fas fa-times"></i>
              <span>Clear Filters</span>
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search by Name */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center space-x-2">
              <i className="fas fa-search text-blue-400"></i>
              <span>Search by Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter university name..."
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Filter by City */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center space-x-2">
              <i className="fas fa-map-marker-alt text-green-400"></i>
              <span>Filter by City</span>
            </label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 cursor-pointer"
            >
              <option value="">All Cities</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Filter by Sector */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center space-x-2">
              <i className="fas fa-building text-purple-400"></i>
              <span>Filter by Sector</span>
            </label>
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="w-full px-4 py-2.5 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 cursor-pointer"
            >
              <option value="">All Sectors</option>
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-4 pt-4 border-t border-gray-700">
          <p className="text-sm text-gray-400">
            Showing{" "}
            <span className="text-white font-semibold">
              {filteredUniversities.length}
            </span>{" "}
            of{" "}
            <span className="text-white font-semibold">
              {universities.length}
            </span>{" "}
            universities
            {hasActiveFilters && (
              <span className="ml-2 text-blue-400">
                <i className="fas fa-info-circle"></i> Filters applied
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Universities Grid */}
      {filteredUniversities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUniversities.map((college, i) => (
            <SchoolCard
              name={college.name}
              link={college.link}
              city={college.city}
              sector={college.sector}
              key={i}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-800 rounded-full mb-4">
            <i className="fas fa-search text-gray-400 text-2xl"></i>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            No universities found
          </h3>
          <p className="text-gray-400 mb-6">
            Try adjusting your filters to find what you're looking for
          </p>
          <button
            onClick={clearFilters}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
