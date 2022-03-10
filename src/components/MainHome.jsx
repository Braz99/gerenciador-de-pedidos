import useMainActions from "../hooks/useMainActions";
import "../styles/mainHome_s.css";

import Order from "./Order";
import SiteInput from "./SiteInput";

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
          translate="Nome"
          update={handleUpdate}
        />
        <SiteInput
          name="adress"
          data={adress}
          translate="Endereço"
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
