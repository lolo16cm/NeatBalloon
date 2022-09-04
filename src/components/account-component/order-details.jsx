import React, { useEffect } from 'react';
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
  console.log('columnValue:',columnValue);
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
  const orderItems = order && order.orderItems;
  // {'imageUrl':"https://cdn10.bigcommerce.com/s-o0d6ce9f7h/products/5301/images/7598/43869__55133.1651948507.356.300.jpg?c=2",'name':"16\" Qualatex Standard Green Helium Latex Balloons 50ct #43869",'price':17.5,'quantity':1};
  console.log('orderItems',orderItems);
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

          {(Array.isArray(orderItems) && orderItems.length > 0) && orderItems.entries().map((row, pos) => {
            console.log('data');
            
            return (
              <TableRow key={pos}>

                {columns.map((col, pos) => {                 
                  const columnName = col.id;
                  const columnValue = row[columnName];
                  console.log('columnValue',columnValue); 
                  const formattedText = formatText(columnName, columnValue);

                  return (                    
                    <TableCell
                      key={pos}
                      style={styles}
                    >
                      {formattedText}
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