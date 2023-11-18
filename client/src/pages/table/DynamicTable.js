// DynamicTable.js
import React from 'react';
import { Container, Table } from 'react-bootstrap';
import TableRow from './TableRow';
import "./Table.css"

function DynamicTable({ tableName, headers, data }) {
  return (
    <Container>
      <Table bordered>
        <thead className='table-head'>
          <tr className='first-row'>
            <th className='year-name'>2023</th>
            {headers.map((header, index) => (
              <th className='city-name' key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody className='table-body'>
          {data.map((rowData, index) => (
            <TableRow key={index} {...rowData} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default DynamicTable;
