export default function OrderInfo({
  children,
  stateOrder,
  noOption,
  className,
}) {
  let { setOrders, orders } = stateOrder;

  function removeOrder(e, flavor) {
    e.preventDefault();

    let newOrders = orders.list.filter((order) => order.flavor !== flavor);

    setOrders({
      list: [...newOrders],
      quantity: newOrders.list?.reduce((a, b) => a + b.quantity, 0),
      total: newOrders.list?.reduce((a, b) => a + b.price, 0),
    });
  }

  return (
    <div className={className}>
      <h3>Sabor: {children.flavor}</h3>
      <h3>Quantidade: {children.quantity}</h3>
      <h3>Preço: {children.price}</h3>

      {!noOption ? (
        <button onClick={(e) => removeOrder(e, children.flavor)}>
          Excluir
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
