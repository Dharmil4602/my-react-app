import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

// let myName = `Dharmil Shah`
function App() {
  return (
    // Here we have added <> </>. These angular brackets are called JSX Fragments. Because in this angular brackets we can add as many html components we want. These are called JSX in which one or more html components are added.

    // {} are used to implement javascript in between html

    // Here We have added Navbar Component. Means whatever code we are writing related to navbar will be automatically effected here. In fact importing Navbar is also done automatically by just writing <Navbar/> here
    <>
    <Navbar title="This is title"/>
    {/* <Navbar/> */}
    <div className="container">
     <TextForm heading="Enter your message"/>
    </div>
    </>
  );
}

export default App;
