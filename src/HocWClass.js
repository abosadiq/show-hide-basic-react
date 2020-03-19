import React, { Component } from "react";
import axios from "axios";
const NewComponent = Orignal => {
  class HocWClass extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        show: false
      };
    }
    haddelDelete = id => {
      let del = this.state.data.filter(de => de.id !== id);
      this.setState({
        data: del
      });
    };
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
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = response.data;
      console.log(result);
      this.setState({
        data: result
      });
    };
    render() {
      return (
        <Orignal
          data={this.state.data}
          showTable={this.showTable}
          show={this.state.show}
          haddelDelete={this.haddelDelete}
        />
      );
    }
  }
  return HocWClass;
};
export default NewComponent;
