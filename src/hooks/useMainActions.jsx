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
  let [show, setShow] = useState(false);

  let [listClients, setListClients, saveStore] = useClients();

  let data = {
    name: "",
    adress: "",
    order: [],
  };

  useEffect(() => {
    let parsedQuantity = quantity;

    if (!isNaN(parsedQuantity)) {
      setPrice(parseFloat(parsedQuantity * 10.0));
    }
  }, [quantity]);

  function handleUpdate(e) {
    let nameInput = e.target.name;

    switch (nameInput) {
      case "name":
        setName(e.target.value);

        let store = JSON.parse(localStorage.getItem("clients"));

        let found = store?.find((client) => client.name === name.toLowerCase());

        if (found) {
          setOrders({
            list: [...found.order.list],
            quantity: orders.list.reduce(
              (a, b) => a + b.price + found.order.price,
              0
            ),
            total: orders.list.reduce(
              (a, b) => a + parseInt(b.quantity) + found.order.quantity,
              0
            ),
          });
          setAdress(found.adress);
        } else {
          setOrders({ list: [] });
          setAdress("");
        }
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

    let check = [name, adress, quantity];

    if (check.includes("") || orders.list.length === 0) {
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
      exists.order.total = exists.order.list.reduce((a, b) => a + b.price, 0);
      exists.order.quantity = exists.order.list.reduce(
        (a, b) => a + parseInt(b.quantity),
        0
      );

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
    show,
    setShow,
  };
}
