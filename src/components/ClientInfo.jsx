import useClientActions from "../hooks/useClientActions";
import OrderInfo from "./OrderInfo";
import useMainActions from "../hooks/useMainActions";

export default function ClientInfo({ children }) {
  let { removeClient } = useClientActions();

  let { orders, setOrders } = useMainActions();

  return (
    <li>
      <h2>Nome: {children.name}</h2>
      <h3>Endereço: {children.adress}</h3>
      <div className="orders-list-main">
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

      <h3>Total: R$ {children.order.total.toFixed(2).replace(".", ",")}</h3>

      <button onClick={() => removeClient(children.name)}>Remover</button>
    </li>
  );
}
