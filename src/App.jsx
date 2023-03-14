import "./App.css";
import { useFetch } from "./useFetch";

function App() {
  const { data, loading, error, handledCancelRequest } = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <div className="App">
      <h1>Fetch Like a PRO</h1>
      <button onClick={handledCancelRequest}>Cancel Request</button>
      <ul>
        {error && <li>Error: {error}</li>}
        {loading && <li>Loading...</li>}
        {data?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
