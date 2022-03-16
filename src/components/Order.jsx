import useOrderActions from "../hooks/useOrderActions";

export default function Order({ values }) {
  let { addOrder } = useOrderActions();

  let { flavor, quantity, price, handleUpdate } = values;

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

      <button
        onClick={(e) => addOrder(e, values, values.orders, values.setOrders)}
      >
        Adicionar Pedido
      </button>
    </div>
  );
}
