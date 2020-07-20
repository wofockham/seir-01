import React from 'react';
import Tasks from '../api/tasks'; // Model

export const Task = (props) => {
  const deleteTask = () => Tasks.remove(props.task._id);
  const toggleCompleted = () => {
    Tasks.update(props.task._id, {
      $set: {completed: !props.task.completed}
    });
  };

  return (
    <li>
      <button onClick={ deleteTask }>
        &times;
      </button>
      <input type="checkbox" readOnly checked={!! props.task.completed} onClick={toggleCompleted} />
      {props.task.text}
    </li>
  );
}
