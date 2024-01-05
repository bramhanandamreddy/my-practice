import React, { Component } from "react";
import "./index.css";

class AddProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      link: "",
      description: "",
      success: "",
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      name: this.state.name,
      link: this.state.link,
      description: this.state.description,
    };

    console.log(newProject);

    this.setState({
      name: "",
      link: "",
      description: "",
      success: "New project added successfully!",
    });
  };

  render() {
    return (
      <div className="add-project-container">
        <h2>Add Project</h2>
        {this.state.success && (
          <div className="alert alert-success">{this.state.success}</div>
        )}
        <form onSubmit={this.onSubmit} className="add-project-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="link">Link</label>
            <input
              type="text"
              name="link"
              value={this.state.link}
              onChange={this.onChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.onChange}
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Project
          </button>
        </form>
      </div>
    );
  }
}

export default AddProject;
