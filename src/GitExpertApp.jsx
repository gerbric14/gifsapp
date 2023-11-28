import React, { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GitExpertApp = () => {
  const [categories, setCategories] = useState(['movie']);

  // Agregar categoria, valor viene desde el input del <AddCategory/>
  const onAddCategory = (newCategory) => {
    // Verificar si ya existe la categoria que se va agg (el include no es sencible a May y Min)
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* TITULO */}
      <h1>Git Expert App</h1>

      {/* INPUT */}
      <AddCategory onNewCategory={onAddCategory} />

      {/* LISTADO DE GIF */}
      {categories.map((category) => (
        <GifGrid 
          category={category} 
          key={category}
        />
      ))}
    </>
  );
};

export default GitExpertApp;
