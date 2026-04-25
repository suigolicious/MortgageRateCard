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
          {lender} - {lenderType}
        </TableCell>
        <TableCell align="right">{rate}</TableCell>
        <TableCell align="right">{apr}</TableCell>
        <TableCell align="right">{term}</TableCell>
      </TableRow>
    </TableBody>
  );
}