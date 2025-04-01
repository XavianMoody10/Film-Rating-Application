import React from "react";

export const ErrorMessageOverlay = ({ error }) => {
  return (
    <>
      {error && (
        <div className=" absolute top-0 left-0 right-0 bottom-0 bg-[#1A1A1A] flex items-center justify-center z-20 border border-white/10">
          <p className=" text-white text-2xl">{error.message}</p>
        </div>
      )}
    </>
  );
};
