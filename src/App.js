import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      show: false
    };
  }
  componentDidMount() {
    this.getData();
  }
  showTable = () => {
    this.setState({
      show: !this.state.show
    });
  };
  getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts   "
    );
    const result = response.data;
    console.log(result);
    this.setState({
      data: result
    });
  };
  render() {
    return (
      <div className="App">
        <Table
          data={this.state.data}
          showTable={this.showTable}
          show={this.state.show}
        />
      </div>
    );
  }
}
export default App;
