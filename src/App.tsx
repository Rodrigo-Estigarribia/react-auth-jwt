import { useState, useEffect } from "react";
import "./App.css";
import UserList from "./UserList";
let contador = 0;
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("se ejecuto el efecto:" + contador++);
  }, [count]);

  return (
    <>
      <h1>Este es mi contador</h1>
      <button onClick={() => setCount(count + 1)}>
        Contador de clicks: {count}
      </button>
      <button onClick={() => setCount(count - 1)}>Restar</button>
      <button onClick={() => setCount(0)}>Reiniciar contador</button>

      <div>
        <UserList />
      </div>
    </>
  );
}

export default App;
