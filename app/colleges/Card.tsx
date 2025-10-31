import React from "react";

type SchoolData = {
  state: string;
  city: string;
  url: string;
  name: string;
};

type SchoolCardProps = {
  data: SchoolData;
};

const SchoolCard = ({ name, url, city, state }: SchoolData) => {
  // console.log(data);
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {name}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {city}, {state}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 dark:text-blue-400 hover:underline"
      >
        {url}
      </a>
    </div>
  );
};

export default SchoolCard;
