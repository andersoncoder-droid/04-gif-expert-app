import { useState } from 'react';

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = () => {
    setcategories([...categories, 'Star Wars']);
  };

  return (
    <>
      {/* titulo */}
      <h1>GiftExpertApp</h1>
      {/* input */}
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
