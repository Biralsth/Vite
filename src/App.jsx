import { useState } from "react";

import "./App.css";
import Navbar from "./assets/components/Navbar";
import Alert from "./assets/components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

import About from "./assets/components/About";
import Home from "./assets/components/Home";
import Contact from "./assets/components/Contact";

import Classes from "./assets/components/Classes";
import Func from "./assets/components/Func";
import Counter from "./assets/components/Counter";
import Guest from "./assets/components/Guest";


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

    setTimeout(() => {
      setAlert(null)
    }, 2000);


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
      <Router>
        <Navbar
          title="THIS IS HEADER"
          mode={mode}
          text={text}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        {/* <Classes /> */}

        <Func />

        <Counter />


        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/guest/:theName" element={<Guest />} />
        </Routes>
      </Router>


    </>

  );
}

export default App;
