import useMainActions from "../hooks/useMainActions";
import Order from "./Order";
import SiteInput from "./SiteInput";
import Cart from "./Cart";
import CartList from "./CartList";
import "../styles/components/main-home-s.css";
import "../styles/components/order-s.css";
import "../styles/components/cart-s.css";

export default function MainHome() {
  let {
    handleSubmit,
    handleUpdate,
    name,
    adress,
    flavor,
    quantity,
    price,
    orders,
    setOrders,
    show,
    setShow,
  } = useMainActions();

  return (
    <main className="home-main">
      <h1 className="home-title">Registro de pedidos</h1>
      <form
        className="home-form"
        onSubmit={(e) => handleSubmit(e)}
        onClick={() => (show ? setShow(!show) : false)}
      >
        <SiteInput
          className="name-input"
          name="name"
          data={name}
          label="Nome"
          update={handleUpdate}
        />
        <SiteInput
          className="adress-input"
          name="adress"
          data={adress}
          label="Endereço"
          update={handleUpdate}
        />

        <Order
          className="add-order"
          values={{ handleUpdate, flavor, quantity, price, orders, setOrders }}
        />

        <Cart show={show} setShow={setShow} orders={orders} />

        <button type="submit" className="form-button">
          Registrar
        </button>
      </form>

      {show ? <CartList orders={orders} setOrders={setOrders} /> : false}
    </main>
  );
}
