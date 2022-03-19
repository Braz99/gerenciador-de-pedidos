import useClientActions from "../hooks/useClientActions";
import OrderInfo from "./OrderInfo";
import useMainActions from "../hooks/useMainActions";

export default function ClientInfo({ children, className }) {
  let { removeClient } = useClientActions();

  let { orders, setOrders } = useMainActions();

  return (
    <li className={className}>
      <h2 className={`${className}-name`}>Nome: {children.name}</h2>
      <h3 className={`${className}-adress`}>Endereço: {children.adress}</h3>
      <div className="orders-list-list">
        {children.order.list.map((item, i) => (
          <OrderInfo
            key={i}
            className="order-info-list"
            orderState={{ orders, setOrders }}
            noOption={true}
          >
            {item}
          </OrderInfo>
        ))}
      </div>

      <h3 className={`${className}-orders-total`}>
        Total: R$ {children.order.total.toFixed(2).replace(".", ",")}
      </h3>

      <div className={`${className}-div-button`}>
        <button
          className={`${className}-remove-button`}
          onClick={() => removeClient(children.name)}
        >
          Remover
        </button>
      </div>
    </li>
  );
}
