import useOrderActions from "../hooks/useOrderActions";

export default function OrderInfo({
  children,
  noOption,
  className,
  orderState,
}) {
  let { removeOrder } = useOrderActions();

  let { orders, setOrders } = orderState;

  return (
    <div className={className}>
      <h3>Sabor: {children.flavor}</h3>
      <h3>Quantidade: {children.quantity}</h3>
      <h3>Preço: {children.price}</h3>

      {!noOption ? (
        <button
          onClick={(e) => removeOrder(e, children.flavor, orders, setOrders)}
        >
          Excluir
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
