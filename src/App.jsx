import { useState } from "react";

import "./App.css";
import Navbar from "./assets/components/Navbar";

function App() {
  // const [count, setCount] = useState(0)
  const [mode, setMode] = useState("light");

  const [text, setText] = useState("Enable dark mode");

  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      setText("Enable light mode")
    } else {
      setMode("light");
      setText("Enable dark mode")
    }
  };

  return (
    <>
      <Navbar
        title="THIS IS HEADER"
        mode={mode}
        text={text}
        toggleMode={toggleMode}
      />

      {/* <h1>Noob + mode</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 5)}>
          count is {count}
        </button>
        
      </div> */}
    </>
  );
}

export default App;
