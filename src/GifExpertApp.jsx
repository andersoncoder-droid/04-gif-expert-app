import { useState } from 'react';

export const GifExpertApp = () => {
  const [categories, setcategories] = useState(['One Punch', 'Dragon Ball']);

  console.log(categories);

  return (
    <>
      {/* titulo */}
      <h1>GiftExpertApp</h1>
      {/* input */}
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
