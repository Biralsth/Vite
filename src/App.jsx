import { useState } from "react";

import "./App.css";
import Navbar from "./assets/components/Navbar";
import Alert from "./assets/components/Alert";

function App() {
  // const [count, setCount] = useState(0)
  const [mode, setMode] = useState("light");

  const [text, setText] = useState("Enable dark mode");

  const [alert, setAlert] = useState(null)


  const showAlert = (type, message) => {

    setAlert({
      type: type,
      message: message

    })
    // setTimeout { () =>}
  }



  const toggleMode = () => {
    if (mode == "light") {
      setMode("dark");
      setText("Enable light mode")
      showAlert("success", "Dark mode has been enabled")
    } else {
      setMode("light");
      setText("Enable dark mode")
      showAlert("success", "Light mode has been enabled")
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
      <Alert alert={alert} />



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
