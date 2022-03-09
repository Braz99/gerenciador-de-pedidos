export default function Order({ values }) {
  let { flavor, setFlavor, quantity, setQuantity, price } = values;

  function handleFlavor(e) {
    setFlavor(e.target.value);
  }

  function handleQuantity(e) {
    setQuantity(e.target.value);
  }

  return (
    <div style={{ border: "1px solid black", padding: '10px'}}>
      <label htmlFor="list_items">Selecione o sabor:</label>
      <select
        name="list_items"
        id="select_items"
        value={flavor}
        onChange={(e) => {
          handleFlavor(e);
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
        onChange={(e) => handleQuantity(e)}
      />
      <h4>Preço: R$ {parseFloat(price).toFixed(2).replace(".", ",")}</h4>
    </div>
  );
}
