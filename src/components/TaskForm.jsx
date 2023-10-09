import { useState } from 'react';

function TaskForm(props) {
  const { tasks, setTasks } = props;

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // add a new task

    const newTask = { id, name, description, isDone: false };
    const updatedTaks = [...tasks, newTask];
    setTasks(updatedTaks);
    setId('');
    setName('');
    setDescription('');

    // update the state variable "task" with my input values
  };

  return (
    <div>
      <form action="">
        <input
          type="text"
          name="id"
          value={id}
          onChange={(event) => setId(event.target.value)}
          placeholder="Enter an id"
        />
        <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter a task name"
        />
        <br />
        <input
          type="text"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Enter a description"
        />
        <br />
        <button type="submit">Add new task</button>
      </form>
    </div>
  );
}

export default TaskForm;
