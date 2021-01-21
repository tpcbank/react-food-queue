import React, { Component } from "react";
import FoodItem from "./FoodItem";

export default class FoodList extends Component {
  render() {
    const { items, handleEdit, handleDelete, clearList } = this.props;
    return (
      <ul className="list-group my-4">
        <h3>Food List </h3>
        {items.map((item) => {
          return (
            <FoodItem
              key={item.id}
              name={item.name}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            />
          );
        })}
        <button className="btn btn-danger" onClick={clearList}>Clear Food</button>
      </ul>
    );
  }
}
