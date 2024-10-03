import React from "react";
import DiffBlock from "./DiffBlock";

function DiffOutput({ diffInput }) {
  // Split the input by 'diff --git' and process each block
  const diffBlocks = diffInput.split("diff --git ").slice(1); // Skip the first empty element

  return (
    <div className="diff-output">
      {diffBlocks.map((block, index) => (
        <DiffBlock key={index} blockContent={block} />
      ))}
    </div>
  );
}

export default DiffOutput;
