import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/tasks', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks', error);
    }
  };

  const addTask = async () => {
    if (newTask.trim()) {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.post('http://localhost:5000/tasks', {
          title: newTask,
        }, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setTasks([...tasks, response.data]);
        setNewTask('');
      } catch (error) {
        console.error('Error adding task', error);
      }
    }
  };

  const deleteTask = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/tasks/${id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error('Error deleting task', error);
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title} <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
