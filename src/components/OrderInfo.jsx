export default function OrderInfo({ children, stateOrder }) {
  let { setOrders, orders } = stateOrder;

  function removeOrder(flavor) {
    let newOrders = orders.list.filter((order) => order.flavor !== flavor);

    setOrders({
      quantity: orders.list.length,
      list: [...newOrders],
      price: orders.price,
    });
  }

  return (
    <div className="order-info">
      <h3>{children.flavor}</h3>
      <h3>{children.quantity}</h3>
      <h3>{children.price}</h3>

      <button onClick={() => removeOrder(children.flavor)}>Excluir</button>
    </div>
  );
}
