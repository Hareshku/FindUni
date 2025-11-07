import React from "react";

type SchoolData = {
  province: string;
  city: string;
  link: string;
  name: string;
  sector: string;
};

const SchoolCard = ({ name, link, city, province, sector }: SchoolData) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 group">
      <div className="flex items-start justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 leading-tight">
          {name}
        </h2>
        <div className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${sector === 'Public'
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
            : 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
          }`}>
          {sector}
        </div>
      </div>

      <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4 space-x-4">
        <div className="flex items-center space-x-1">
          <i className="fas fa-map-marker-alt text-blue-500 text-sm"></i>
          <span className="text-sm font-medium">{city}</span>
        </div>
        <div className="flex items-center space-x-1">
          <i className="fas fa-flag text-green-500 text-sm"></i>
          <span className="text-sm">{province}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-sm transition-colors duration-300 group/link"
        >
          <span>Visit Website</span>
          <i className="fas fa-external-link-alt text-xs group-hover/link:translate-x-1 transition-transform duration-300"></i>
        </a>

        <div className="flex items-center space-x-2 text-gray-400">
          <i className="fas fa-university text-sm"></i>
        </div>
      </div>
    </div>
  );
};

export default SchoolCard;
