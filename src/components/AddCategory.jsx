import React, { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValueTrim = inputValue.trim();
    if (inputValueTrim.length <= 1) return;

    onNewCategory(inputValueTrim);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        onChange={onInputChange}
        value={inputValue}
      />
    </form>
  );
};
