import useMainActions from "../hooks/useMainActions";
import Order from "./Order";
import SiteInput from "./SiteInput";
import "../styles/mainHome_s.css";

export default function MainHome() {
  let { handleSubmit, handleUpdate, name, adress, flavor, quantity, price } =
    useMainActions();

  return (
    <main id="main_home" method="POST">
      <h1>Registro de pedidos</h1>
      <form id="form" onSubmit={(e) => handleSubmit(e)}>
        <SiteInput
          name="name"
          data={name}
          label="Nome"
          update={handleUpdate}
        />
        <SiteInput
          name="adress"
          data={adress}
          label="Endereço"
          update={handleUpdate}
        />

        <Order values={{ handleUpdate, flavor, quantity, price }} />

        <button type="submit" id="button_form">
          Registrar
        </button>
      </form>
    </main>
  );
}
