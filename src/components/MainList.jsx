import { useClients } from "../provider/ClientsProvider";
import "../styles/components/main-list-s.css";
import ClientInfo from "./ClientInfo";

function MainList() {
  let [listClients] = useClients();

  return (
    <main className="main-list">
      <ul className="clients-list">
        {listClients.map((client, i) => (
          <ClientInfo key={i} className="client-info">
            {client}
          </ClientInfo>
        ))}
      </ul>
    </main>
  );
}

export default MainList;
