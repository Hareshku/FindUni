import React from "react";

type SchoolData = {
  city: string;
  link: string;
  name: string;
  sector: string;
};

const SchoolCard = ({ name, link, city, sector }: SchoolData) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-slate-200 hover:border-blue-300 group hover:-translate-y-1">
      <div className="flex items-start justify-between mb-4">
        <h2 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300 leading-tight flex-1 pr-2">
          {name}
        </h2>
        <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex-shrink-0 ${sector === 'Public'
          ? 'bg-green-100 text-green-700 border border-green-200'
          : 'bg-purple-100 text-purple-700 border border-purple-200'
          }`}>
          {sector}
        </div>
      </div>

      <div className="flex items-center text-slate-600 mb-5">
        <div className="flex items-center space-x-2 bg-slate-50 px-3 py-1.5 rounded-lg">
          <i className="fas fa-map-marker-alt text-teal-600 text-sm"></i>
          <span className="text-sm font-medium">{city}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-all duration-300 group/link"
        >
          <span>Visit Website</span>
          <i className="fas fa-arrow-right text-xs group-hover/link:translate-x-1 transition-transform duration-300"></i>
        </a>

        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors duration-300">
          <i className="fas fa-university text-blue-600 text-sm"></i>
        </div>
      </div>
    </div>
  );
};

export default SchoolCard;
