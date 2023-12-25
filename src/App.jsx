import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import PersonalData from "./personalData";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PersonalData />
      <PersonalData />
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
