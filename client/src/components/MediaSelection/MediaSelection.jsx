import React from "react";

export const MediaSelection = ({ optionsArray, onChange, defaultValue }) => {
  const options = optionsArray.map((o) => {
    return (
      <option key={o.option} value={o.value}>
        {o.option}
      </option>
    );
  });

  return (
    <div className=" w-full">
      <select
        name="list"
        id="list"
        className=" p-3 text-white bg-black outline-none"
        defaultValue={defaultValue}
        onChange={onChange}
      >
        {options}
      </select>
    </div>
  );
};
