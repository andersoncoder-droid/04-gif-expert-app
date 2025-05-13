import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    if (newCategory.includes(newCategory)) return;
    setcategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>GiftExpertApp</h1>

      <AddCategory
        //   setCategories={setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
