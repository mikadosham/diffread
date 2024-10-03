import React from "react";

function DiffInput({ onDiffChange }) {
  // Update the parent component when the user types in the textarea
  const handleChange = (e) => {
    onDiffChange(e.target.value);
  };

  return (
    <div className="diff-input">
      <textarea
        placeholder="Paste your diff code here..."
        onChange={handleChange}
      ></textarea>
    </div>
  );
}

export default DiffInput;
