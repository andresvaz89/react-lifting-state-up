function Task(props) {
  const { task, toggleTaskDone } = props;
  return (
    <div className="task-card">
      <div className="task-card-half">
        <h1>{task.name}</h1>
        {task.isDone ? ( // <== UPDATE
          <span>DONE </span>
        ) : (
          <span>PENDING ⌛</span>
        )}

        <h2> Task Description </h2>
        <p>{task.description}</p>

        <button className="add" onClick={() => toggleTaskDone(task._id)}>
          {task.isDone ? ( // <== UPDATE
            <span>UNDO </span>
          ) : (
            <span>✔️</span>
          )}
        </button>
        {/*  <button onClick={() => deleteTask(task._id)}>Delete Task</button> */}
      </div>
    </div>
  );
}

export default Task;
