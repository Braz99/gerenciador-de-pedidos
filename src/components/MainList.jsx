import { useClients } from "../provider/ClientsProvider";
import ClientsList from "./ClientsList";
import "../styles/components/main-list-s.css";

function MainList() {
  let [listClients] = useClients();

  return (
    <main className="main-list">
      <ClientsList clients={listClients} />
    </main>
  );
}

export default MainList;
