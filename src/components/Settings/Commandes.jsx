import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { FaCheckCircle, FaExclamationCircle, FaTimesCircle } from 'react-icons/fa';

const columns = [
  { id: 'id', 
    label: '#', 
    minWidth: 30
  },
  { id: 'dateHeure', 
    label: 'Date & Heure', 
    minWidth: 100
  },
  { id: 'destinataire', 
    label: 'Destinataire', 
    minWidth: 100 
  },
  {
    id: 'lieu',
    label: 'Lieu',
    minWidth: 100,
  },
  {
    id: 'price',
    label: 'Prix ( Fcfa )',
    minWidth: 100,

  },
  {
    id: 'status',
    label: 'Statut',
    minWidth: 100,
  },
];

function createData(id, dateHeure, destinataire, lieu, price, status) {
  
  return { id, dateHeure, destinataire, lieu, price, status };
}

const rows = [
  createData(1, '01/01/2023 - 00:00', 'John Doe', 'Cocody, Angré 8e Tranche', 100000, <FaCheckCircle className='text-green-500'/>),
  createData(2, '01/01/2023 - 00:02', 'Alice Doe', 'Koumassi', 50000, <FaExclamationCircle className='text-yellow-500'/>),
  createData(3, '01/01/2023 - 00:03', 'Micheal Doe', 'Yopougon', 75000, <FaCheckCircle className='text-green-500'/>),
  createData(4, '01/01/2023 - 00:04', 'Jackson Doe', 'Abobo', 15000, <FaTimesCircle className='text-red-500'/>),
  createData(5, '01/01/2023 - 00:05', 'Paul Doe', 'Songon', 45000, <FaCheckCircle className='text-green-500'/>),
  createData(6, '01/01/2023 - 00:06', 'Marc Doe', 'Port Bouet', 25000, <FaExclamationCircle className='text-yellow-500'/>),
  createData(7, '01/01/2023 - 00:07', 'Damien Doe', 'Yamoussoukro', 26000, <FaTimesCircle className='text-red-500'/>),
  createData(8, '01/01/2023 - 00:08', 'Bruce Doe', 'Bingerville', 15000, <FaCheckCircle className='text-green-500'/>),
  createData(9, '01/01/2023 - 00:09', 'Michelle DOe', 'Bouake', 12000, <FaTimesCircle className='text-red-500'/>),
  createData(10, '01/01/2023 - 00:10', 'Jean Doe', 'Korhogo', 10500, <FaExclamationCircle className='text-yellow-500'/>),
  createData(11, '01/01/2023 - 00:11', 'Kevin Doe', 'Plateau', 8500, <FaCheckCircle className='text-green-500'/>),
  createData(12, '01/01/2023 - 00:12', 'Stephanie Doe', 'Cocody Faya', 55450, <FaExclamationCircle className='text-yellow-500'/>),
  createData(13, '01/01/2023 - 00:13', 'Ruben Doe', 'Paname', 50700, <FaCheckCircle className='text-green-500'/>),
  createData(14, '01/01/2023 - 00:14', 'Sofiane Doe', 'Bruxelles', 12500, <FaCheckCircle className='text-green-500'/>),
  createData(15, '01/01/2023 - 00:15', 'Alkaida Doe', 'Bassam', 20500, <FaTimesCircle className='text-red-500'/>),
];

export default function Commandes() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 20, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}