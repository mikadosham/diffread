import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

function DiffBlock({ blockContent }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const blockLines = blockContent.split("\n");

  // Extract file paths from "--- a/FILE" and "+++ b/FILE" lines, avoiding "index" and other metadata lines
  const filePathBefore = blockLines
    .find((line) => line.startsWith("--- a/"))
    ?.replace("--- a/", "");
  const filePathAfter = blockLines
    .find((line) => line.startsWith("+++ b/"))
    ?.replace("+++ b/", "");

  // If paths are the same, simplify the message
  const fileChangeMessage =
    filePathBefore === undefined || filePathBefore === null
      ? `Create new file: ${filePathAfter}`
      : filePathBefore === filePathAfter
      ? `Changes for ${filePathBefore}`
      : `Changes from ${filePathBefore} (before) to ${filePathAfter} (after)`;

  // Filter out metadata lines like 'index', 'hunk headers (@@)', and '\ No newline at end of file'
  const diffLines = blockLines.filter((line) => {
    return (
      !line.startsWith("index") &&
      !line.startsWith("@@") &&
      !line.startsWith("---") && // Filter out file path metadata
      !line.startsWith("+++") &&
      !line.startsWith("new file") &&
      !line.includes("\\ No newline at end of file")
    );
  });

  // Helper function to extract line numbers from hunk headers
  const getInitialLineNumbers = (line) => {
    const match = line.match(/@@ -(\d+),?\d* \+(\d+),?\d* @@/);
    if (match) {
      return {
        originalLine: parseInt(match[1], 10),
        newLine: parseInt(match[2], 10),
      };
    }
    return { originalLine: 0, newLine: 0 };
  };

  // Initialize line numbers from the first hunk header
  let { originalLine, newLine } = getInitialLineNumbers(
    blockLines.find((line) => line.startsWith("@@")) || ""
  );

  return (
    <div className="diff-block">
      <h3 onClick={toggleExpand}>
        {fileChangeMessage}
        <FontAwesomeIcon
          icon={isExpanded ? faMinus : faPlus}
          className="toggle-icon"
        />
      </h3>
      {isExpanded && (
        <table>
          <tbody>
            {diffLines.map((line, index) => {
              let originalLineNumber = "";
              let newLineNumber = "";

              // Determine the row's class based on the type of change
              let rowClass = "";
              if (line.startsWith("+")) {
                newLineNumber = newLine;
                newLine += 1;
                rowClass = "added"; // Apply "added" class for added lines
              } else if (line.startsWith("-")) {
                originalLineNumber = originalLine;
                originalLine += 1;
                rowClass = "removed"; // Apply "removed" class for removed lines
              } else if (line.startsWith("a/")) {
                return null;
              } else {
                originalLineNumber = originalLine;
                newLineNumber = newLine;
                originalLine += 1;
                newLine += 1;
              }

              return (
                <tr key={index} className={rowClass}>
                  <td>{originalLineNumber}</td>
                  <td>{newLineNumber}</td>
                  <td>{line}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DiffBlock;
