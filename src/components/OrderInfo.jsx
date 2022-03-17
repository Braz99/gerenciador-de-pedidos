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
      <h3 className={`${className}-flavor`}>Sabor: {children.flavor}</h3>
      <h3 className={`${className}-quantity`}>
        Quantidade: {children.quantity}
      </h3>
      <h3 className={`${className}-price`}>
        Preço: R$ {children.price.toFixed(2).replace(".", ",")}
      </h3>

      {!noOption ? (
        <button
          className={`${className}-button`}
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
