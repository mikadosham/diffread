import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"; // Importing relevant icons

function Instructions() {
  // Retrieve the toggle state from localStorage or default to true (shown)
  const [isShown, setIsShown] = useState(() => {
    const savedState = localStorage.getItem("instructionsShown");
    return savedState !== null ? JSON.parse(savedState) : true; // Default to true if no saved state
  });

  // Handle the toggle functionality
  const toggleInstructions = () => {
    setIsShown(!isShown);
  };

  // Save the state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("instructionsShown", JSON.stringify(isShown));
  }, [isShown]);

  return (
    <div className="instructions-container">
      <h3 onClick={toggleInstructions} className="instructions-toggle">
        Instructions
        <FontAwesomeIcon
          icon={isShown ? faMinus : faPlus}
          className="toggle-icon"
        />
      </h3>
      {isShown && (
        <div className="instructions">
          <h2>How to Use the Diff Checker</h2>
          <ul>
            <li>
              <strong>What is a diff?</strong> A diff shows the changes between
              two versions of a file. Added lines are shown in green, and
              removed lines are shown in red.
            </li>
            <li>
              <strong>Added lines: </strong>
              Lines with a{" "}
              <span style={{ color: "green" }}>
                <strong>green background</strong>
              </span>{" "}
              have been <strong>added</strong> in the new version of the file.
              <br />
              Example:{" "}
              <code style={{ backgroundColor: "#e6ffed", padding: "2px" }}>
                + const newFeature = true;
              </code>
            </li>
            <li>
              <strong>Removed lines: </strong>
              Lines with a{" "}
              <span style={{ color: "red" }}>
                <strong>red background</strong>
              </span>{" "}
              have been <strong>removed</strong> from the original file.
              <br />
              Example:{" "}
              <code style={{ backgroundColor: "#ffeef0", padding: "2px" }}>
                - const oldFeature = false;
              </code>
            </li>
            <li>
              <strong>Line numbers: </strong>
              The left column shows line numbers from the original file, and the
              right column shows the line numbers in the new file.
              <br />
              Example: <code>Old: 18</code> <code>New: 20</code> means line 18
              in the old file corresponds to line 20 in the new file.
            </li>
            <li>
              <strong>Toggling changes: </strong>
              You can collapse or expand the changes for each file by clicking
              the <FontAwesomeIcon icon={faPlus} /> or{" "}
              <FontAwesomeIcon icon={faMinus} /> icons next to each file’s name.
            </li>
            <li>
              <strong>How to apply changes: </strong>
              If you want to manually apply the changes:
              <ul>
                <li>
                  For added lines, copy and paste the new lines into your file.
                </li>
                <li>
                  For removed lines, locate those lines in your file and delete
                  them.
                </li>
              </ul>
              Example: If the diff shows{" "}
              <code style={{ backgroundColor: "#e6ffed", padding: "2px" }}>
                + const newFeature = true;
              </code>
              , add this line to your file.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Instructions;
