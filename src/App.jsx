import { useState } from "react";
import "./App.css";

import PersonalData from "./personalData";
import Education from "./education";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PersonalData />
      <Education />

      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
      </div>
    </>
  );
}
