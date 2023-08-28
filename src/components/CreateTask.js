import React, { Component } from "react";
import "./CreateTask.css";
export default class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ task: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    try {
      fetch(
        `http://127.0.0.1:2022/Todolist/Additem?task=${this.state.task}`
      )
        .then((response) => {
          if (response.ok) {
            alert("Task added successfully");
            this.props.createTask(this.state.task);
            this.setState({ task: "" });
          }
        })
        .catch((error) => {
          alert("error occur in adding the task " + error);
        });
    } catch (error) {
      alert("Error in adding the task " + error);
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button className="add">Add Task</button>
      </form>
    );
  }
}
