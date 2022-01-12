import React from 'react';

export default function List({ taskLists, handleClick, handleDelete }) {
  return (
    <div>
      <h3>List of To Dos</h3>
      {taskLists.map((item) => (
        <ul key={item.id}>
          <li>
            <input type="checkbox" checked={item.is_complete} onChange={() => handleClick(item)} />
            {item.task}
            <button onClick={() => handleDelete(item.id)}>X</button>
          </li>
        </ul>
      ))}
    </div>
  );
}
