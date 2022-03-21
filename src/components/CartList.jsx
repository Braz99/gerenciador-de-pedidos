import OrderInfo from "./OrderInfo";

export default function CartList({ orders, setOrders }) {
  return (
    <div className={`orders-list-cart`}>
      {orders.list.map((order, i) => (
        <OrderInfo
          className="order-info-cart"
          key={i}
          orderState={{ orders, setOrders }}
        >
          {order}
        </OrderInfo>
      ))}
    </div>
  );
}
