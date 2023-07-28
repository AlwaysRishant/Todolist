import React, { Component } from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";
import "./Main.css";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
    this.createTask = this.createTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
  }
  createTask(tname) {
    if (tname.trim() === "") {
      alert("Task cannot be empty");
      return;
    }
    let newTask = { taskname: tname.trim(), isCompleted: false };
    let allTasks = [...this.state.tasks, newTask];
    this.setState({ tasks: allTasks });
  }
  deleteTask(idx) {
    let arr = this.state.tasks.filter((t, index) => index !== idx);
    this.setState({ tasks: arr });
  }
  editTask(index, value) {
    let arr = [...this.state.tasks];
    arr[index].taskname = value;
    this.setState({ tasks: arr });
  }
  toggleTask(idx) {
    let arr = [...this.state.tasks];
    arr[idx].isCompleted = !arr[idx].isCompleted;
    this.setState({ tasks: arr });
  }
  render() {
    return (
      <div className="Main">
        <h1>Todo List</h1>
        <div className="content">
          <CreateTask createTask={this.createTask} />
        </div>
        <div>
          <TaskList
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
            toggleTask={this.toggleTask}
          />
        </div>
      </div>
    );
  }
}