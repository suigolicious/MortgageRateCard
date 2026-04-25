import './TableItem.scss';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export default function TableItem({ lender, lenderType, rate, apr, term }) {
  return (
    <TableBody>
      <TableRow
        key={"calories"}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          <div className='lender-name'>{lender}</div>
          <div className='lender-type'>{lenderType}</div>
        </TableCell>
        <TableCell align="right" className="rate-cell cell">{rate}</TableCell>
        <TableCell align="right" className='cell'>{apr}</TableCell>
        <TableCell align="right" className='cell'>{term}</TableCell>
      </TableRow>
    </TableBody>
  );
}