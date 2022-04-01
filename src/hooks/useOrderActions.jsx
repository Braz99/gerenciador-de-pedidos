import { toast } from "react-toastify";

export default function useOrderActions() {
  function addOrder(e, values, orders, setOrders) {
    e.preventDefault();

    let { flavor, quantity, price } = values;

    if (flavor === "") {
      toast.error("Adicione um sabor!", {
        toastId: 7,
      });
      return false;
    }

    if (quantity < 5) {
      toast.error("Aumente a quatidade para 5 ou mais!", {
        toastId: 10,
      });
      return false;
    }

    let found = orders.list.find((order) => order.flavor === flavor);

    let list = [];

    if (found) {
      found.flavor = flavor;
      found.quantity = quantity;
      found.price = price;

      list = [...orders.list];

      toast.warn("Sabor atualizado!", { autoClose: 2000 });
    } else {
      list = [
        ...orders.list,
        { flavor: flavor, quantity: quantity, price: price },
      ];

      toast.success("Sabor adicionado!", { autoClose: 2000 });
    }

    setOrders({
      list: [...list],
      total: list.reduce((a, b) => a + b.price, 0),
      quantity: list.reduce((a, b) => a + parseInt(b.quantity), 0),
    });
  }

  function removeOrder(e, flavor, orders, setOrders) {
    e.preventDefault();

    let newOrders = orders.list.filter((order) => order.flavor !== flavor);

    setOrders({
      list: [...newOrders],
      quantity: newOrders.reduce((a, b) => a + parseInt(b.quantity), 0),
      total: newOrders.reduce((a, b) => a + parseFloat(b.price), 0),
    });

    toast.error("Pedido removido!");
  }

  return { addOrder, removeOrder };
}
