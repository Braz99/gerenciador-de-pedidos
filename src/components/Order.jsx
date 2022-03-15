import { toast } from "react-toastify";

export default function Order({ values }) {
  let { handleUpdate, flavor, quantity, price, orders, setOrders } = values;

  function addFlavor(e) {
    e.preventDefault();

    if (flavor === "") {
      toast.error("Adicione um sabor!", {
        toastId: 7,
      });
      return false;
    }

    let found = orders.list.find((order) => order.flavor === flavor);

    if (found) {
      found.flavor = flavor;
      found.quantity = quantity;
      found.price = price;

      let list = [...orders.list];

      setOrders({
        list: [...list],
        total: list.reduce((a, b) => a + b.price, 0),
        quantity: list.reduce((a, b) => a + parseInt(b.quantity), 0),
      });
    } else {
      let list = [
        ...orders.list,
        { flavor: flavor, quantity: quantity, price: price },
      ];
      setOrders({
        list: [...list],
        total: list.reduce((a, b) => a + b.price, 0),
        quantity: list.reduce((a, b) => a + parseInt(b.quantity), 0),
      });
    }
  }

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <label htmlFor="flavor">Selecione o sabor:</label>
      <select
        name="flavor"
        id="select_items"
        value={flavor}
        onChange={(e) => {
          handleUpdate(e);
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
        onChange={(e) => handleUpdate(e)}
      />
      <h4>Preço: R$ {parseFloat(price).toFixed(2).replace(".", ",")}</h4>

      <button onClick={(e) => addFlavor(e)}>Add flavor</button>
    </div>
  );
}
