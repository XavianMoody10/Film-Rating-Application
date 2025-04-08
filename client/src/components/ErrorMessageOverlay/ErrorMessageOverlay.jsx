import React from "react";

export const ErrorMessageOverlay = ({ message }) => {
  return (
    <div className=" absolute top-0 left-0 bottom-0 right-0 bg-[#333333] border border-white/25 flex items-center justify-center z-10">
      <p className=" text-white text-2xl font-bold">{message}</p>
    </div>
  );
};
