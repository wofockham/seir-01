import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { useTracker } from 'meteor/react-meteor-data'; // Magic for websocket connection to mongodb
import { Task } from './Task'; // destructuring
import Tasks from '../api/tasks'; // Model


const App = () => {
  // hook
  const tasks = useTracker(() => Tasks.find({}).fetch()); // Extremely magic

  return (<div>
    <h1>Wow Todo List</h1>
    <TaskForm />
    <ul>
      { tasks.map( (t) => <Task key={ t._id } task={ t } /> ) }
    </ul>
  </div>);
};

class TaskForm extends Component {
  _handleSubmit(event) {
    event.preventDefault();

    // refs are probably not a good practice but they do get used.
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Tasks.insert({
      text: text,
      createdAt: new Date() // current time
    })
  }

  render() {
    return (
      <form className="new-task" onSubmit={ this._handleSubmit.bind(this) }>
        <input type="text" placeholder="Type to add new tasks" ref="textInput" />
      </form>
    );
  }
}

export default App;
