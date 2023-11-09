import React from 'react';
import "./Table.css"
function TableRow({ date, city1, city2, city3, city4, city5 }) {
  return (
    <tr>
      <td className='date'>{date}</td>
      <td className='city-value'>{city1}</td>
      <td className='city-value'>{city2}</td>
      <td className='city-value'>{city3}</td>
      <td className='city-value'>{city4}</td>
      <td className='city-value'>{city5}</td>
    </tr>
  );
}

export default TableRow;
