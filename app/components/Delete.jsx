import React from "react";

const Delete = ({ onDelete }) => {
  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold p-1 ml-0.5 text-xs rounded"
      onClick={onDelete}
    >
    X
    </button>
  );
};

export default Delete;
