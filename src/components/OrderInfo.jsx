export default function OrderInfo({
  children,
  stateOrder,
  noOption,
  className,
}) {
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
    <div className={className}>
      <h3>Sabor: {children.flavor}</h3>
      <h3>Quantidade: {children.quantity}</h3>
      <h3>Preço: {children.price}</h3>

      {!noOption ? (
        <button onClick={() => removeOrder(children.flavor)}>Excluir</button>
      ) : (
        ""
      )}
    </div>
  );
}
