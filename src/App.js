import './App.css';
import React, {useState} from 'react';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';

// let myName = `Dharmil Shah`
function App() {
  const [darkMode, setDarkMode] = useState(`light`); // States whether dark mode is enabled or not.

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
      setAlert({
          msg: message,
          type: type
      })

      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }


  const toggleMode = () => {
    if (darkMode === `light`) {
      setDarkMode(`dark`);
      document.body.style.backgroundColor = `grey`;
      // document.body.style.color = `white`;
      showAlert(`Dark mode enabled`, `success`);
      document.title = `Dark Mode Enabled`;
      
    }
    else
    {
      setDarkMode(`light`);
      document.body.style.backgroundColor = `white`;
      // document.body.style.color = `blacks`;
      showAlert(`Light mode enabled`, `success`);
      document.title = `Light Mode Enabled`;
    }
  }

  return (
    // Here we have added <> </>. These angular brackets are called JSX Fragments. Because in this angular brackets we can add as many html components we want. These are called JSX in which one or more html components are added.

    // {} are used to implement javascript in between html

    // Here We have added Navbar Component. Means whatever code we are writing related to navbar will be automatically effected here. In fact importing Navbar is also done automatically by just writing <Navbar/> here
    <>
    <Navbar title="This is title" mode={darkMode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
    {/* <Navbar/> */}
    <div className="container">
     <TextForm showAlert={showAlert} heading="Enter your message"/>
     {/* <About/> */}
    </div>
    </>
  );
}

export default App;
