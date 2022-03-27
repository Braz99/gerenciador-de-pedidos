import OrderInfo from "./OrderInfo";

export default function CartList({ orders, setOrders }) {
  if (orders.list.length === 0) {
    return (
      <div className="orders-list-cart-empty">
        <div className="orders-list-cart-message">Carrinho vazio!</div>
      </div>
    );
  }

  return (
    <div>
      <div className="orders-list-cart">
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
    </div>
  );
}
