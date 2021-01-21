import React, { Component } from "react";

export default class FoodItem extends Component {
  render() {
    const { name, handleEdit, handleDelete } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{name}</h6>
        <div>
            <span onClick={handleEdit}><i className="fas fa-edit mx-2 text-primary"></i></span>
            <span onClick={handleDelete}><i className="far fa-trash-alt text-danger"></i></span>
        </div>
      </li>
    );
  }
}
