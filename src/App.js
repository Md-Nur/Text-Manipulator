// import logo from './logo.svg';
// import './App.css';
import React, { useState } from 'react'
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Nav';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [modeBtnText, setModeBtnText] = useState("Enable Dark Mode")

  const changeMode = (modeColor) => {
    if (mode === 'light') {
      setMode("dark");
      setModeBtnText("Enable Mode: light");
      document.body.style.color = "white";
      document.body.style.backgroundColor = modeColor;
      showAlert("Change to Dark mode", 'success')
      // document.title = "Text Manipulator - Dark"
      // setInterval(() => {
      //   document.title = "Text Manipulator is amayzing"
      // }, 1000);
      // setInterval(() => {
      //   document.title = "Install Text Manipulator Now!"
      // }, 1500);
    } else {
      setMode("light")
      setModeBtnText("Enable Mode: Dark")
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      showAlert("Change to Light mode", 'success')
      // document.title = "Text Manipulator - Light"
    }
  }
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      <Router>
        <Navbar title="Text Utils"  aboutText="About" mode={mode} btnMode={modeBtnText} toggleMode={changeMode} />
        <Alert alert={alert} />

        <Switch>
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm heading="Try Text Manipulator - sentence word counter, charecter counter, email extractor" mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
      </Router>
    </>

  );
}

export default App;
