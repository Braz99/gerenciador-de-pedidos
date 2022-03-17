import useMainActions from "../hooks/useMainActions";
import Order from "./Order";
import SiteInput from "./SiteInput";
import OrderInfo from "./OrderInfo";
import "../styles/components/main-home-s.css";
import "../styles/components/order-s.css";

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
  } = useMainActions();

  return (
    <main className="home-main" method="POST">
      <h1 className="home-title">Registro de pedidos</h1>
      <form className="home-form" onSubmit={(e) => handleSubmit(e)}>
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

        {/* <button
          className="cart-button"
          onClick={(e) => {
            e.preventDefault();
            setShow(!show);
          }}
        >
          Cart
        </button> */}

        <div className={`orders-list`}>
          {orders.list.map((order, i) => (
            <OrderInfo
              className="order-info-home"
              key={i}
              orderState={{ orders, setOrders }}
            >
              {order}
            </OrderInfo>
          ))}
        </div>

        <button type="submit" className="form-button">
          Registrar
        </button>
      </form>
    </main>
  );
}
