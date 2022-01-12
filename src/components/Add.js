import React from 'react';
import './Add.css';

export default function ToDoComponent({ task, taskLists, handleSubmit, updateTaskState }) {
  return (
    <>
      <div>
        <form>
          <label>
            To Do:
            <input
              type="text"
              name="task"
              value={task}
              onChange={(e) => {
                updateTaskState('task', e.target.value);
              }}
            />
          </label>
          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}
