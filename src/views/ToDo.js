import React from 'react';
import { useState, useEffect } from 'react';
import Add from '../components/Add';
import List from '../components/List';
import { createToDo, fetchTasks } from '../services/todo';

export default function ToDo() {
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

  const updateTaskState = (key, value) => {
    task[key] = value;
    setTask({ ...task });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createToDo(task);
      alert('Task added');
    } catch {
      alert('Error, task not added');
    }
  };

  return (
    <div>
      <List taskLists={taskLists} />
      <Add task={task} handleSubmit={handleSubmit} updateTaskState={updateTaskState} />
    </div>
  );
}
