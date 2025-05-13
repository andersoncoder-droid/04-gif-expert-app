import { useState } from 'react';

export const AddCategory = () => {
  const [inputValue, setinputValue] = useState('Star Wars');

  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  };

  const onsubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={(event) => onsubmit(event)}>
      <input
        type='text'
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
