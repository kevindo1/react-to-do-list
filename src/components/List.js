import React from 'react';

export default function List({ taskLists }) {
  return (
    <div>
      <h3>List of To Dos</h3>
      {taskLists.map((item) => (
        <div key={item.id}>{item.task}</div>
      ))}
    </div>
  );
}
