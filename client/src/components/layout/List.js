import React from 'react';

const List = ({ items }) => {
  return (
    <div ul class='list-group'>
      {items.map(item => (
        <li class='list-group-item'>{item}</li>
      ))}
    </div>
  );
};

export default List;
