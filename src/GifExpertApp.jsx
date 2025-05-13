import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = (newCategory) => {
    // console.log(newCategory);
    // categories.push(newCategory);
    setcategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* titulo */}

      <h1>GiftExpertApp</h1>

      {/* input */}

      <AddCategory
        //   setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />

      {/* listado de gif */}

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>

      {/* gif item */}
    </>
  );
};
