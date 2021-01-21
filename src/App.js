import React, { Component } from "react";
import FoodIuput from "./components/FoodInput";
import FoodList from "./components/FoodList";
import { v1 as uuid } from "uuid";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      name: this.state.item,
    };
    const updateItem = [...this.state.items, newItem];
    this.setState({
      items: updateItem,
      item: "",
      id: uuid(),
      editItem: false,
    });
    console.log(this.state.items);
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleDelete = (id) => {
    const filterItems = this.state.items.filter((item) => item.id !== id);
    this.setState({
      items:filterItems
    })
  };

  handleEdit = (id) => {
    const filterItems = this.state.items.filter(item => item.id !== id)
    const selectItem = this.state.items.find(item => item.id === id)

    this.setState({
      items:filterItems,
      item:selectItem.name,
      id:id,
      editItem:true
    })
  };

  clearList = () => {
    this.setState({
      items:[]
    })
  };

  render() {
    return (
      <div className="container">
        <h2 align="center">Food Queue Application </h2>
        <div className="row">
          <FoodIuput
            item={this.state.item}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            handleDelete={this.handleDelete}
            editItem={this.state.editItem}
          />
        </div>
        <FoodList
          items={this.state.items}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          clearList={this.clearList}
        />
      </div>
    );
  }
}

export default App;
