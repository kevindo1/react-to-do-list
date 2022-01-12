import React from 'react';
import './Add.css';

export default function ToDoComponent({ handleSubmit, setTask, logOutUser }) {
  return (
    <>
      <div>
        <form>
          <label>
            Add:
            <input
              type="text"
              name="task"
              onChange={(e) => {
                setTask(e.target.value);
              }}
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
