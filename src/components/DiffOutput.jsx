import React from "react";
import DiffBlock from "./DiffBlock";

function DiffOutput({ diffInput }) {
  const diffBlocks = diffInput.split("diff --git ").slice(1);

  return (
    <div className="diff-output">
      {diffBlocks.map((block, index) => (
        <DiffBlock key={index} blockContent={block} />
      ))}
    </div>
  );
}

export default DiffOutput;
