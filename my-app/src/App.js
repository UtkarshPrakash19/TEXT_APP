import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
let name = "harry";
function App() {
  const [mode, setMode] = useState('light');
  const [modeText,setModeText]=useState("Turn On Dark Mode");
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>
{
    setAlert({message: message,type:type})
    setTimeout(() => {
      setAlert(null)
    }, 2000);
}
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setModeText("Turn off Dark Mode");
      showAlert("dark mode has been enabled","Success");
      document.body.style.background='#000080';
      document.title="dark mode";
    } else {
      setMode('light');
      setModeText("Turn On Dark Mode");
      showAlert("light mode has been enabled","Success");
      document.body.style.background='white';
      document.title="light mode"
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About text utils"
        mode={mode}
        toggleMode={toggleMode}
        modeText={modeText}
      />
      <Alert alert={alert}/>
      <div className={`container text-${mode === 'light' ? 'dark' : 'light'}`}>
      <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>
      <About/>
      </div>
    </>
  );
}
export default App;