import { useClients } from "../provider/ClientsProvider";
import "../styles/mainList_s.css";
import ClientInfo from "./ClientInfo";

function MainList() {
  let [listClients] = useClients();

  return (
    <main id="main_list">
      <ul id="area_list">
        {listClients.map((client, i) => (
          <ClientInfo key={i}>{client}</ClientInfo>
        ))}
      </ul>
    </main>
  );
}

export default MainList;
