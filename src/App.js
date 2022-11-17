import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextFormat from './components/TextFormat';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000); 
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      showAlert("Success", "Dark Mode has been enabled")
      document.body.style.backgroundColor = "#00203F";
      document.body.style.color = "#ADEFD1";
    }
    else {
      setMode('light')
      showAlert("Success", "Light Mode has been enabled")
      document.body.style.backgroundColor = "#ADEFD1";
      document.body.style.color = "#00203F";
    }
  }
  return (
    // <Router>
    //   <Navbar title="TextFormat" about="About" mode={mode} toggleMode={toggleMode}/>
    //   <Alert alert={alert}/>
    //   <div className='container'>
    //     <Routes>
    //       <Route exact path="/" element={<TextFormat showAlert={showAlert} mode={mode} heading="Enter the text"/>} />
    //     </Routes>
    //     <Routes>
    //       <Route exact path="/About" element={<About/>} />
    //     </Routes>
    //   </div>
    // </Router>
    <>
      <Navbar title="TextFormat" about="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container'>
        <TextFormat showAlert={showAlert} mode={mode} heading="Enter the text"/>
      </div>
    </>
  );
}

export default App;
