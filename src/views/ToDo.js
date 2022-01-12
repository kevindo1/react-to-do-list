import React from 'react';
import { useState, useEffect } from 'react';
import Add from '../components/Add';
import List from '../components/List';
import { createToDo, fetchTasks, toggleCompleted } from '../services/todo';
import { logout } from '../services/users';

export default function ToDo({ setCurrentUser }) {
  const [task, setTask] = useState({});
  const [taskLists, setTaskLists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTasks();
      setTaskLists(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <h3>Loading</h3>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createToDo(task);
      alert('Task added');
    } catch {
      alert('Error, task not added');
    }
  };

  const handleClick = async (task) => {
    await toggleCompleted(task.id, !task.is_complete);
    const resp = await fetchTasks();
    setTaskLists(resp);
    //   setTaskLists((prevState) =>
    //     prevState.map((item) =>
    //       item.id === item.id ? { ...task, is_complete: !task.is_complete } : item
    //     )
    //   );
    // } catch {
    //   alert('Error');
    // }
  };

  const logOutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div>
      <List taskLists={taskLists} handleClick={handleClick} />
      <Add handleSubmit={handleSubmit} setTask={setTask} logOutUser={logOutUser} />
    </div>
  );
}
