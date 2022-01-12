import React from 'react';
import { useState, useEffect } from 'react';
import Add from '../components/Add';
import List from '../components/List';
import { createToDo, fetchTasks, toggleCompleted, deleteTask } from '../services/todo';
import { logout } from '../services/users';

export default function ToDo({ setCurrentUser }) {
  const [task, setTask] = useState('');
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
      const resp = await createToDo(task);
      setTask('');
      setTaskLists((prev) => [...prev, resp[0]]);
      alert('Task added');
    } catch (e) {
      alert('Error, task not added');
    }
  };

  const handleClick = async (task) => {
    await toggleCompleted(task.id, !task.is_complete);
    const resp = await fetchTasks();
    setTaskLists(resp);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
  };

  const logOutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div>
      <List taskLists={taskLists} handleClick={handleClick} handleDelete={handleDelete} />
      <Add handleSubmit={handleSubmit} task={task} setTask={setTask} logOutUser={logOutUser} />
    </div>
  );
}
