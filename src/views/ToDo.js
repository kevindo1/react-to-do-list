import React from 'react';
import { useState } from 'react';
import ToDoComponent from '../components/ToDoComponent';

export default function ToDo() {
  const [toDo, setToDo] = useState('');

  return (
    <div>
      <ToDoComponent />
    </div>
  );
}
