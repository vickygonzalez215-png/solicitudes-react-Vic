import NewRequestForm from "./components/NewRequestForm";
import RequestList from "./components/RequestList";
import RequestCounter from "./components/RequestCounter";
import { useRequests } from "./hooks/useRequests";

export default function App() {
  const { requests, addRequest, toggleRequest } = useRequests();

  return (
    <>
      <header>
        <h1>Gestión de Peticiones- COVIMAR</h1>
        <p className="subtitle">Todas las PQRS</p>
      </header>

      <main>
        <NewRequestForm onAdd={addRequest} />

        {/* controles de la lista */}

        <RequestList requests={requests} onToggle={toggleRequest} />
        <RequestCounter requests={requests} />
      </main>

      <footer>
        <p id="credits">Hecho por Área Jurídica</p>
      </footer>
    </>
  );
}
