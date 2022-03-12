import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useClients } from "../provider/ClientsProvider";

export default function useMainActions() {
  let [name, setName] = useState("");
  let [adress, setAdress] = useState("");
  let [flavor, setFlavor] = useState("");
  let [quantity, setQuantity] = useState(5);
  let [price, setPrice] = useState(10.0);
  let [orders, setOrders] = useState({ list: [] });

  let [listClients, setListClients, saveStore] = useClients();

  let data = {
    name: "",
    adress: "",
    order: [],
  };

  useEffect(() => {
    let parsedQuantity = parseInt(quantity);
    setPrice(parseFloat(parsedQuantity * 10.0));
  }, [quantity]);

  function handleUpdate(e) {
    let name = e.target.name;

    switch (name) {
      case "name":
        setName(e.target.value);
        break;
      case "adress":
        setAdress(e.target.value);
        break;
      case "flavor":
        setFlavor(e.target.value);
        break;
      case "quantity":
        setQuantity(e.target.value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    let check = [name, adress, flavor, quantity];

    if (check.includes("")) {
      toast.error("Preencha todos os campos corretamente!", {
        autoClose: 2500,
        id: 15,
      });
      return false;
    }

    let nameParsed = name.trim().toLowerCase();
    let adressParsed = adress.trim().toLowerCase();

    let exists = listClients.find((client) => client.name === nameParsed);

    if (!exists) {
      data.name = nameParsed;
      data.adress = adressParsed;

      data.order = orders;

      listClients.push(data);

      setListClients([...listClients]);

      saveStore(listClients);

      toast.success("Pedido registrado!", {
        autoClose: 3000,
        position: "top-center",
        hideProgressBar: true,
      });
    } else {
      exists.name = nameParsed;
      exists.adress = adressParsed;
      exists.order.list = [];

      exists.order.list.push(...orders.list);

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
    setOrders({ list: [] });
  }

  return {
    handleUpdate,
    handleSubmit,
    name,
    adress,
    flavor,
    setFlavor,
    quantity,
    setQuantity,
    price,
    orders,
    setOrders,
  };
}
