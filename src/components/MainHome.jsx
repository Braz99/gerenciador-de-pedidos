import useMainActions from "../hooks/useMainActions";
import Order from "./Order";
import SiteInput from "./SiteInput";
import "../styles/mainHome_s.css";
import OrderInfo from "./OrderInfo";

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
    <main id="main_home" method="POST">
      <h1>Registro de pedidos</h1>
      <form id="form" onSubmit={(e) => handleSubmit(e)}>
        <SiteInput name="name" data={name} label="Nome" update={handleUpdate} />
        <SiteInput
          name="adress"
          data={adress}
          label="Endereço"
          update={handleUpdate}
        />

        {orders.list.map((order, i) => (
          <OrderInfo
            className="order-info-home"
            key={i}
            stateOrder={{ orders, setOrders }}
            father={""}
          >
            {order}
          </OrderInfo>
        ))}

        <Order
          values={{ handleUpdate, flavor, quantity, price, orders, setOrders }}
        />

        <button type="submit" id="button_form">
          Registrar
        </button>
      </form>
    </main>
  );
}
