import React, { useState } from "react";
import DiffInput from "./components/DiffInput";
import DiffOutput from "./components/DiffOutput";
import Instructions from "./components/Instructions";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [diffInput, setDiffInput] = useState(""); // State to hold the diff input

  // Handler to update the state when input changes
  const handleDiffChange = (input) => {
    setDiffInput(input);
  };

  return (
    <div className="App">
      <Header />
      <DiffInput onDiffChange={handleDiffChange} />
      <Instructions />
      <DiffOutput diffInput={diffInput} />
      <Footer />
    </div>
  );
}

export default App;
