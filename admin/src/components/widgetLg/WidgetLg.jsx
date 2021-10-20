import { useEffect, useState } from 'react';
import { userRequest } from '../../redux/requestMethods';
import {
  WidgetLgAmount,
  WidgetLgButton,
  WidgetLgContainer,
  WidgetLgDate,
  WidgetLgStatus,
  WidgetLgTable,
  WidgetLgTh,
  WidgetLgTitle,
  WidgetLgTr,
  WidgetLgUser,
  WidgetLgUserName,
} from './WidgetLgElements';
import { format } from 'timeago.js'

export const WidgetLg = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders")
        setOrders(res.data)
      } catch (err) {  }
    }
    getOrders()
  }, []);
  return (
    <>
      <WidgetLgContainer>
        <WidgetLgTitle>Latest Transactions</WidgetLgTitle>
        <WidgetLgTable>
          <tbody>
            <WidgetLgTr>
              <WidgetLgTh> Customers</WidgetLgTh>
              <WidgetLgTh> Date</WidgetLgTh>
              <WidgetLgTh> Amount</WidgetLgTh>
              <WidgetLgTh> Status</WidgetLgTh>
            </WidgetLgTr>
            {orders.map((order) => (
              <WidgetLgTr key={order.createdAt}>
                <WidgetLgUser>
                  {/* <WidgetLgImg src='https://images.pexels.com/photos/8305338/pexels-photo-8305338.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='' /> */}
                  <WidgetLgUserName>{order.userId}</WidgetLgUserName>
                </WidgetLgUser>
                <WidgetLgDate>
                  {format(order.createdAt)}
                </WidgetLgDate>
                <WidgetLgAmount>
                  {order.amount}
                </WidgetLgAmount>
                <WidgetLgStatus>
                  <WidgetLgButton type={order.status}>{order.status}</WidgetLgButton>
                </WidgetLgStatus>
              </WidgetLgTr>
            ))}
          </tbody>
        </WidgetLgTable>
      </WidgetLgContainer>
    </>
  )
}