import React, { useEffect, useState } from 'react';
import ApiService from '../service/ApiService';

function PointTable() {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ApiService.getPointTable();
        console.log("Data fetched: ", data);
        setPoints(data); // Set the fetched data
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="table-container overflow-x-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Point Table</h1>
      <table className="min-w-full bg-white shadow-md mt-8 rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            {points.length > 0 && points[0].map((header, index) => (
              <th key={index} className="py-2 px-4 text-center border-b">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {points.slice(1).map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`border-t hover:bg-gray-100 text-center border-b hover:scale-105 transition-all cursor-pointer
              ${rowIndex <= 3 ? 'bg-green-200' : 'bg-red-200'}`}
            >
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="py-2 px-4">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PointTable;
