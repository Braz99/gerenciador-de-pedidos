import ClientInfo from "./ClientInfo";

function ClientsList({ clients }) {
  if (clients.length === 0) {
    return (
      <div className="clients-list-empty">
        <span className="clients-list-message">Sem clientes registrados!</span>
      </div>
    );
  }

  return (
    <ul className="clients-list">
      {clients.map((client, i) => (
        <ClientInfo key={i} className="client-info">
          {client}
        </ClientInfo>
      ))}
    </ul>
  );
}

export default ClientsList;
