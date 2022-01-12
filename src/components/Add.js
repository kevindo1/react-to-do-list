import React from 'react';
import './Add.css';

export default function ToDoComponent({ task, handleSubmit, setTask, logOutUser }) {
  return (
    <>
      <div>
        <form>
          <label>
            Add:
            <input
              type="text"
              name="task"
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
              placeholder=""
            />
          </label>
          <div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </form>
        <button onClick={logOutUser}>Log Out</button>
      </div>
    </>
  );
}
