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
      {children.order.list.map((item, i) => (
        <OrderInfo key={i} stateOrder={{ orders, setOrders }}>
          {item}
        </OrderInfo>
      ))}

      <button onClick={() => removeClient(children.name)}>Remover</button>
    </li>
  );
}
