import './Table.scss'
import Table from '@mui/material/Table';
import TableItem from './TableItem/TableItem'
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';

export default function BasicTable() {
  const [lenders, setLenders] = useState([]);

  useEffect(() => {
    fetch('../../public/data.json')
      .then(response => response.json())
      .then(data => setLenders(data.lenders))
  }, [])

  return (
    <div className='table-container'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
          <TableHead className='table-head'>
            <TableRow>
              <TableCell>Lender</TableCell>
              <TableCell align="right">Rate</TableCell>
              <TableCell align="right">APR</TableCell>
              <TableCell align="right">Term</TableCell>
            </TableRow>
          </TableHead>
          {lenders.map((lender, count) => (
            <TableItem key={count} {...lender} />
          ))}
        </Table>
      </TableContainer>
    </div>
  );
}
