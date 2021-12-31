
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, newMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type: type 
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () =>{
    if(mode === 'dark')
    {
      newMode('light')
      showAlert("Light mode Enabled", "success");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.getElementById('mybox').style.backgroundColor = "white";
      document.getElementById('mybox').style.color = "black";
    }
    else{
      newMode('dark')
      showAlert("Dark mode Enabled", "success");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.getElementById('mybox').style.backgroundColor = "black";
      document.getElementById('mybox').style.color = "white";
    }
  }
  const toogleModePurple = () =>{
    if(mode === 'dark')
    {
      newMode('light')
      showAlert("Light mode Enabled", "success");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.getElementById('mybox').style.backgroundColor = "white";
      document.getElementById('mybox').style.color = "black";
    }
    else{
      newMode('dark')
      showAlert("Purple mode Enabled", "success");
      document.body.style.backgroundColor = "purple";
      document.body.style.color = "white";
      document.getElementById('mybox').style.backgroundColor = "purple";
      document.getElementById('mybox').style.color = "white";
      document.getElementById('btn1').style.color = "black";
      document.getElementById('btn1').style.backgroundColor = "white";
      document.getElementById('btn2').style.color = "black";
      document.getElementById('btn2').style.backgroundColor = "white";
    }
  }
  const toogleModeBlue=() =>{
    if(mode === 'dark')
    {
      newMode('light')
      showAlert("Light mode Enabled", "success");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.getElementById('mybox').style.backgroundColor = "white";
      document.getElementById('mybox').style.color = "black";
    }
    else{
      newMode('dark')
      showAlert("Blue mode Enabled", "success");
      document.body.style.backgroundColor = "blue";
      document.body.style.color = "white";
      document.getElementById('mybox').style.backgroundColor = "blue";
      document.getElementById('mybox').style.color = "white";
      document.getElementById('btn1').style.color = "black";
      document.getElementById('btn1').style.backgroundColor = "white";
      document.getElementById('btn2').style.color = "black";
      document.getElementById('btn2').style.backgroundColor = "white";
    }
  }
  return (
    <>
    <Router>
    <Navbar title = "TextUtils" AboutText = "About Text" mode = {mode} toggleMode = {toggleMode} toogleModePurple={toogleModePurple} toogleModeBlue = {toogleModeBlue} />
    <Alert alert = {alert}/>

     <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm heading= "Enter text to analyze below" showAlert = {showAlert}/>
          </Route>
      </Switch>
    </Router>
    </>
  );

}

export default App;
