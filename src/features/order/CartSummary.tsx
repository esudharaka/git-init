import React, { useState } from 'react';


import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import  './styles/CartSummary.scss'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}
interface itemDetails {
  lineId: number;
  itemName: string;
  quantity: number;
  unitPrice: number;
};

const cartItems: itemDetails[] = [
  { lineId: 1, itemName: 'Cheese Burger', quantity: 1, unitPrice: 10.50},
  { lineId: 2, itemName: 'Sandwitch', quantity: 2, unitPrice: 10.50},
  { lineId: 3, itemName: 'Coke', quantity: 4, unitPrice: 10.50},
  { lineId: 4, itemName: 'Gin bottle', quantity: 2, unitPrice: 10.50}
];

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export function CartSummary() {

  return (
    <aside>
      <div className='cart-summary '>
        <div className='cart-summary__item-details'>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>My Cart Summary</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((row) => (
                  <StyledTableRow key={row.lineId}>
                    <StyledTableCell component="th" scope="row">
                      {row.quantity} * {row.itemName}
                    </StyledTableCell>
                  
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className='cart-summary__total'>
          Toatal is: $ 10.40
        </div>
        <div className='cart-summary__checkout-btn'>
          <Button variant="contained">
            Yalla
          </Button>
        </div>
      </div>
          
    </aside>
  );
}
