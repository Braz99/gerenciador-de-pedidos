import useOrderActions from "../hooks/useOrderActions";

export default function Order({ values, className }) {
  let { addOrder } = useOrderActions();

  let { flavor, quantity, price, handleUpdate } = values;

  return (
    <div className={className}>
      <label htmlFor="flavor" className="flavors-select-label">
        Selecione o sabor:
      </label>
      <select
        name="flavor"
        className="flavors-select"
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

      <label htmlFor="quantity" className="quantity-input-label">
        Quantidade:
      </label>
      <input
        name="quantity"
        className="quantity-input"
        type="number"
        min="5"
        max="500"
        value={quantity}
        onChange={(e) => handleUpdate(e)}
      />
      <h3 className="total-price">
        Preço: R$ {parseFloat(price).toFixed(2).replace(".", ",")}
      </h3>

      <button
        className="add-order-button"
        onClick={(e) => addOrder(e, values, values.orders, values.setOrders)}
      >
        Adicionar Pedido
      </button>
    </div>
  );
}
