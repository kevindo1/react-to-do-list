import React from 'react';

export default function List({ taskLists }) {
  return (
    <div>
      <h3>List of To Dos</h3>
      {taskLists.map((item) => (
        <ul key={item.id}>
          <li>
            <input type="checkbox" />
            {item.task}
          </li>
        </ul>
      ))}
    </div>
  );
}
