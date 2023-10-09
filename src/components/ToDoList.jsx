import { useState } from 'react';
import Task from './Task';
import Summary from './Summary';
import TaskForm from './TaskForm';

const initialTasks = [
  {
    _id: '1a',
    name: 'Task1',
    description: 'Do something important',
    isDone: false
  },
  {
    _id: '2b',
    name: 'Task2',
    description: 'Do something important',
    isDone: false
  },
  {
    _id: '3c',
    name: 'Task3',
    description: 'Do something important',
    isDone: false
  }
];

function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [tasksCompleted, setTasksCompleted] = useState(0);
  const [displayForm, setDisplayForm] = useState(false);

  //build a function to update the list of tasks when toggled
  const toggleTaskDone = (id) => {
    const tasksCopy = [...tasks];

    tasksCopy.forEach((task) => {
      // Find the selected task and update task's `isDone` property,
      if (task._id === id) {
        task.isDone = task.isDone ? false : true;

        // then update `tasksCompleted` state variable
        if (task.isDone) setTasksCompleted(tasksCompleted + 1);
        else if (!task.isDone) setTasksCompleted(tasksCompleted - 1);
      }

      setTasks(tasksCopy);
    });
  };

  return (
    <div>
      <Summary tasksCompleted={tasksCompleted} /> {/*   UPDATE   */}
      <div className="todo-container">
        {tasks.map((task) => (
          <Task key={task._id} task={task} toggleTaskDone={toggleTaskDone} />
        ))}
      </div>
      <button onClick={() => setDisplayForm(!displayForm)}>
        {displayForm ? 'Hide form' : 'Show Form'}
      </button>
      {displayForm && <TaskForm task={tasks} setTasks={setTasks} />}
    </div>
  );
}

export default ToDoList;
