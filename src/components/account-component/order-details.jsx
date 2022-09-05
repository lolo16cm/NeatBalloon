import React, { useEffect, useState } from 'react';
import {
  TableContainer, Table, TableHead,
  TableBody, TableRow, TableCell
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { setOrderDetails } from './../../store/orders/orders.action';

const columns = [
  {
    id: 'imageUrl',
    label: ''
  },
  {
    id: 'name',
    label: 'Name'
  },
  {
    id: 'price',
    label: 'Price'
  },
  {
    id: 'quantity',
    label: 'Quantity'
  }
]

const styles = {
  fontSize: '16px',
  width: '10%'
};

const formatText = (columnName, columnValue) => {  
  switch(columnName) {
    case 'price':
      return `$${columnValue}`;
    case 'imageUrl':
      return <img src={columnValue} width={250} />;
    default:
      return columnValue;
  }
}

const OrderDetails = ({ order }) => {
  const dispatch = useDispatch(); 
  let data= Object.entries(order);
  const items = []
  data.forEach(([key, val]) =>{
    console.log('key',key);
    console.log('val',val);
    if(key === 'orderItems'){
      Object.entries(val).forEach((left, right) =>{
        items.push(left);
      })      
    }
  });
  useEffect(() => {
    return () => {
      dispatch(
        setOrderDetails({})
      );
    }
  }, []);


  return (
    <TableContainer>
      <Table>

        <TableHead>
          <TableRow>

            {columns.map((col, pos) => {
              const { label } = col;

              return (
                <TableCell
                  key={pos}
                  style={styles}
                >
                  { label }
                </TableCell>
              )
            })}

          </TableRow>
        </TableHead>
        <TableBody>
          {(Array.isArray(items) && items.length > 0) && items.map((row, pos) => {

            const rowData = row[1];
            return (
              <TableRow key={pos}>

                {columns.map((col, pos) => { 
                    
                  const columnName = col.id;
                  const columnValue = rowData[columnName];
                  console.log('row',row);
                  return (                    
                    <TableCell
                      key={pos}
                      style={styles}
                    >
                      {formatText(columnName, columnValue)}
                    </TableCell>
                  )
                })}

              </TableRow>
            )
          })}

        </TableBody>

      </Table>
    </TableContainer>
  )
}

export default OrderDetails;