import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Row } from './row.jsx'
import { useEffect, useState } from 'react';
import { api } from '../../../services/api.js'
import { Filter, FilterOptions } from './style.js';
import { orderStatusOptions } from './OrderStatus.js';


export function Orders() {

  const [orders, setOrders] = useState([]) //backup para guardar os pedidos
  const [filteredOrders, setFilteredOrders] = useState([])  //valores na tela
  const [rows, setRows] = useState([])
  const [activeStatus, setActiveStatus] = useState(6) //status ativo do filtro

  useEffect(() => {
    async function loadOrders() {
      const { data } = await api.get('orders')//pego as infos da api aqui

      setOrders(data)
      setFilteredOrders(data)
    }
    loadOrders()
  }, [])



  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: order.createdAt,
      status: order.status,
      products: order.products
    };
  }

  useEffect(() => {
    const newRows = filteredOrders.map(order => createData(order))

    setRows(newRows)
  }, [filteredOrders])

  function handleStatus(status) {
    if (status.id === 6) {
      setFilteredOrders(orders)
    } else {
      const newOrders = orders.filter(order => order.status === status.value)
      setFilteredOrders(newOrders)
    }

    setActiveStatus(status.id)
  }

  useEffect(() => {
    if(activeStatus === 6) {
      setFilteredOrders(orders)
    }else{
      const statusIndex = orderStatusOptions.findIndex( item => item.id === activeStatus);

      const newFilteredOrders = orders.filter(order => order.status === orderStatusOptions[statusIndex].value)
      setFilteredOrders(newFilteredOrders)
    }
  }, [orders])

  return (
    <>
      <Filter>
        {orderStatusOptions.map((status) => (
          <FilterOptions
            key={status.id}
            onClick={() => handleStatus(status)}
            $isActiveStatus={activeStatus === status.id}
          >
            {status.label}
          </FilterOptions>
        ))}
      </Filter>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell >PEDIDO</TableCell>
              <TableCell >CLIENTE</TableCell>
              <TableCell >DATA DO PEDIDO</TableCell>
              <TableCell >STATUS</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.orderId}
                row={row}
                orders={orders}
                setOrders={setOrders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
