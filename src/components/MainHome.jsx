import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useClients } from "../provider/ClientsProvider";
import "../styles/mainHome_s.css";

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

  function handleName(event) {
    event.preventDefault();

    let name = event.target.value;

    listClients.forEach((item) => {
      if (item.name === name) {
        setAdress(item.adress);
      }
    });

    setName(name);
  }

  //   --------------------------Another function --------------------

  function HandleSubmit(event) {
    event.preventDefault();

    let check = [name, adress, flavor, quantity];

    let exists = listClients.find((client) => client.name === name);

    if (check.includes("")) {
      toast.error("Preencha todos os campos corretamente!", {
        autoClose: 2500,
        id: 15,
      });
      return false;
    }

    if (!exists) {
      data.name = name.trim();
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
      <form id="form" onSubmit={HandleSubmit}>
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
          onChange={(e) => setAdress(e.target.value)}
        />

        <label htmlFor="list_items">Selecione o sabor:</label>

        <select
          name="list_items"
          id="select_items"
          value={flavor}
          onChange={(e) => {
            setFlavor(e.target.value);
          }}
        >
          <option value="">Sabor</option>
          <option value="leite condensado">Leite Condensado</option>
          <option value="chocolate">Chocolate</option>
          <option value="abacaxi">Abacaxi</option>
          <option value="goiaba">Goiaba</option>
          <option value="morango">Morango</option>
        </select>

        <label htmlFor="quantity">Quantidade:</label>
        <input
          name="quantity"
          id="input_quantity"
          type="number"
          min="5"
          max="500"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <h4>Preço: R$ {parseFloat(price).toFixed(2).replace(".", ",")}</h4>
        <button type="submit" id="button_form">
          Registrar
        </button>
      </form>
    </main>
  );
}
