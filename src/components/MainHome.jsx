import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useClients } from "../provider/ClientsProvider";
import "../styles/mainHome_s.css";
import Order from "./Order";

export default function MainHome() {
  let [name, setName] = useState("");
  let [adress, setAdress] = useState("");
  let [flavor, setFlavor] = useState("");
  let [quantity, setQuantity] = useState(5);
  let [price, setPrice] = useState(10.0);

  let [listClients, setListClients, saveStore] = useClients();

  useEffect(() => {
    let parsedQuantity = parseInt(quantity);
    setPrice(parseFloat(parsedQuantity * 10.0));
  }, [quantity]);

  let data = {
    name: "",
    adress: "",
    order: [],
  };

  function handleName(e) {
    e.preventDefault();

    let name = e.target.value;

    setName(name);
  }

  function handleAdress(e) {
    let adress = e.target.value;

    setAdress(adress);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let check = [name, adress, flavor, quantity];

    let exists = listClients.find(
      (client) => client.name === name.trim().toLowerCase()
    );

    if (check.includes("")) {
      toast.error("Preencha todos os campos corretamente!", {
        autoClose: 2500,
        id: 15,
      });
      return false;
    }

    if (!exists) {
      data.name = name.trim().toLowerCase();
      data.adress = adress;
      data.order.push({
        flavor: flavor,
        quantity: parseInt(quantity),
        price: parseFloat(price),
      });

      listClients.push(data);

      setListClients([...listClients]);

      saveStore(listClients);

      toast.success("Pedido registrado!", {
        autoClose: 3000,
        position: "top-center",
        hideProgressBar: true,
      });
    } else {
      exists.name = name;
      exists.adress = adress;

      exists.order = [];

      exists.order.push({
        flavor: flavor,
        quantity: quantity,
        price: price,
      });

      setListClients([...listClients]);

      saveStore([...listClients]);

      toast.warning(`Pedido atualizado com sucesso!`, {
        autoClose: 3000,
        position: "top-center",
        hideProgressBar: true,
      });
    }

    setName("");
    setAdress("");
    setFlavor("");
    setQuantity(5);
    setPrice(10.0);
  }

  return (
    <main id="main_home" method="POST">
      <h1>Registro de pedidos</h1>
      <form id="form" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="name">Nome:</label>
        <input
          name="name"
          value={name}
          id="input_name"
          onChange={(e) => handleName(e)}
        />

        <label htmlFor="adress">Endereço:</label>
        <input
          name="adress"
          id="input_adress"
          value={adress}
          onChange={(e) => handleAdress(e)}
        />

        <Order values={{ flavor, setFlavor, quantity, setQuantity, price }} />

        <button type="submit" id="button_form">
          Registrar
        </button>
      </form>
    </main>
  );
}
