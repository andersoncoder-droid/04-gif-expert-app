import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = () => {
    setcategories(['Star Wars', ...categories]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GiftExpertApp</h1>
      {/* input */}
      <AddCategory />
      {/* listado de gif */}
      <button onClick={onAddCategory}> Agregar </button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
      {/* gif item */}
    </>
  );
};
