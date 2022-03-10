import useClientActions from "../hooks/useClientActions";

export default function ClientInfo({ children }) {
  let { removeClient } = useClientActions();

  return (
    <li>
      <h2>Nome: {children.name}</h2>
      <h3>Endereço: {children.adress}</h3>
      {children.order.map((item, i) => (
        <div key={i}>
          <h3>Sabor de {item.flavor}</h3>
          <h3>Quantidade: {item.quantity}</h3>
          <h3>Preço: R$ {item.price}</h3>
        </div>
      ))}
      <button onClick={() => removeClient(children.name)}>Remover</button>
    </li>
  );
}
