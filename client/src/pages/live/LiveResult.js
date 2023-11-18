// LiveResult.js
import React from 'react';
import DynamicTable from '../table/DynamicTable';

function LiveResult() {
  const tableData = [
    {
      tableName: 'table1',
      headers: ['DISAWER','INDIA BAZAR', 'FARIDABAD', 'GAZIABAD', 'GALI'],
      data: [
        { date: '1-11', city1: '', city2: 18, city3: 88, city4: 16, city5: 44 },
        // Add more data as needed
      ],
    },
    {
      tableName: 'table2',
      headers: ['MUMBAI CITY','PUNE CITY', 'RANCHI', 'DELHI GOLD'],
      data: [
        { date: '1-11', city1: 83, city2: "", city3: "", city4: 2 },
        // Add more data as needed
      ],
    },
    {
      tableName: 'table3',
      headers: ['PUNJAB','DELHI CITY', 'DUBAI BAZAR', 'LUCKNOW GOLD'],
      data: [
        { date: '1-11', city1: 29, city2: "", city3: 16, city4: 12},
        // Add more data as needed
      ],
    },
    {
      tableName: 'table4',
      headers: ['KASHIPUR','AHEMDABAD', 'INDIA DARBAR'],
      data: [
        { date: '1-11', city1:39, city2: 60, city3: 46},
        // Add more data as needed
      ],
    },
    {
      tableName: 'table5',
      headers: ['OLD DELHI','PARAS', 'SAI RAM', 'HARIYANA BAZAR','HINDUSTAN'],
      data: [
        { date: '1-11', city1: 10, city2: 26, city3: 45, city4: 6,city5:25},
        // Add more data as needed
      ],
    },
    // Add more tables as needed
  ];

  return (
    <>
      {tableData.map((table, index) => (
        <DynamicTable key={index} {...table} />
      ))}
    </>
  );
}

export default LiveResult;
