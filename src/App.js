import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import React, {useState} from "react";

function App() {
  const [show, setShow] = useState(false);

  console.log(show);

  const handleSetShow = () => {
      setShow(true);
      return show
  }

  const handleSetShowToFalse = () => {
      setShow(false);
      return show
  }
  return (
    <div className="App">
      <Header show={show} toTrue={handleSetShow} toFalse={handleSetShowToFalse}/>
      <Body show={show}/>
      <Footer/>
    </div>
  );
}

export default App;
