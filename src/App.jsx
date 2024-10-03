import React, { useState, useRef } from "react";
import DiffInput from "./components/DiffInput";
import DiffOutput from "./components/DiffOutput";
import Instructions from "./components/Instructions";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [diffInput, setDiffInput] = useState(""); // State to hold the diff input
  const instructionsRef = useRef(null); // Create a reference for the Instructions

  // Handler to update the state when input changes
  const handleDiffChange = (input) => {
    setDiffInput(input);

    // Scroll to the instructions when diff input changes
    if (instructionsRef.current) {
      instructionsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Header />
      {/* Pass the instructionsRef to DiffInput */}
      <DiffInput
        onDiffChange={handleDiffChange}
        instructionsRef={instructionsRef}
      />
      {/* Attach the ref to the Instructions component */}
      <Instructions ref={instructionsRef} />
      <DiffOutput diffInput={diffInput} />
      <Footer />
    </div>
  );
}

export default App;
