import React, { Component } from "react";

export default class FoodIuput extends Component {
  render() {
    const {
      handleSubmit,
      item,
      editItem,
      handleDelete,
      handleChange,
    } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Enter your food </label>
            <input
              type="text"
              className="form-control"
              value={item}
              onChange={handleChange}
            />
          </div>
          <input
            type="submit"
            disabled={item ? false : true}
            className={editItem?"btn btn-primary":"btn btn-success"}
            value={editItem?"edit":"save"}
          />
        </form>
      </div>
    );
  }
}
