import React from 'react';
import {
    TableContainer, Table, TableHead,
    TableRow, TableBody, TableCell
} from '@mui/material';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const columns = [
    {
        id: 'orderCreatedDate',
        lable: 'Order Date'
    },
    {
        id: 'documentID',
        lable: 'Order ID'
    },
    {
        id: 'orderTotal',
        lable: 'Total Amount'
    }
]

const styles = {
    fontSize: '16px',
    cursor: 'pointer',
    width: '10%'
  };

  const formatText = (columnName, columnValue) => {
    switch (columnName) {
      case 'orderTotal':
        return `$${Intl.NumberFormat('en-IN', { maximumSignificantDigits: 10 }).format(columnValue)}`;
      case 'orderCreatedDate':
        return moment(columnValue.nano).format('DD/MM/YYYY')
      default:
        return columnValue;
    }
  };

  const OrderHistory = ({ orders }) => {
    const history = useNavigate();

    return (
      <TableContainer>
        <Table>
  
          <TableHead>
            <TableRow>
              {columns.map((column, pos) => {
                const { lable } = column;
  
                return (
                  <TableCell
                    key={pos}
                    style={styles}
                  >
                    {lable}
                  </TableCell>
                )
              })}
            </TableRow>
          </TableHead>
  
          <TableBody>
  
            {(Array.isArray(orders) && orders.length > 0) && orders.map((row, pos) => {
              const { documentID } = row;
  
              return (
                <TableRow
                  key={pos}
                  onClick={() => history(`/order/${documentID}`)}
                >
  
                  {columns.map((column, pos) => {
                    const columnName = column.id;
                    const columnValue = row[columnName];
                    const formattedText = formatText(columnName, columnValue);
  
                    return (
                      console.log('pos',pos),
                      <TableCell
                        key={pos}
                        style={styles}
                      >
                        {formattedText}
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
  
  export default OrderHistory;