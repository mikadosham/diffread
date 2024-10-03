import React from "react";

function DiffInput({ onDiffChange, instructionsRef }) {
  // Update the parent component when the user types in the textarea
  const handleChange = (e) => {
    onDiffChange(e.target.value);

    // Ensure instructionsRef is defined before accessing it
    if (instructionsRef && instructionsRef.current) {
      instructionsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePaste = (e) => {
    setTimeout(() => {
      handleChange(e);
    }, 0); // Use setTimeout to allow the paste to complete before handling the change
  };

  return (
    <div className="diff-input">
      <textarea
        placeholder="Paste your diff code here..."
        onPaste={handlePaste}
      ></textarea>
    </div>
  );
}

export default DiffInput;
