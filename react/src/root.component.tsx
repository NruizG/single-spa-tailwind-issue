import React from 'react';

const Root: React.FC<{ name: string }> = ({ name }) => {
  return <section className='text-green-400'>{name} is mounted!</section>;
};

export default Root;
