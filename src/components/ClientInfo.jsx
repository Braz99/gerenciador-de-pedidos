import { useClients } from "../provider/ClientsProvider";

export default function ClientInfo({ children }) {
  let [listClients, setListClients, saveStore] = useClients();

  function removeClient(name) {
    let newList = listClients.filter((client) => client.name !== name);

    setListClients([...newList]);

    saveStore(newList);
  }

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
