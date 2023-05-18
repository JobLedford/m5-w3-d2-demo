import React from "react";
import Lists from "./Lists";

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        alldata: [],
        singledata: {
          title: "",
          author: ""
        }
      };
    }

    getlists = () => {
      fetch("http://localhost:5000/posts")
      .then(res => res.json())
      .then(result => 
        this.setState({
          loading: false,
          alldata: result
        })
      )
      .catch(console.log);
    }

    render() {//basically asking true or false with ternary operator
      const listTable = this.state.loading ? (
        <span>Loading data... please be patient.</span> //TRUE
      ) : (
        <Lists alldata={this.state.alldata} /> //FALSE
      );

      return (
        <div className="container">
          <span className="title-bar">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.getLists}
            >
              Get Lists
            </button>
          </span>
          
          {listTable}
        </div>
      )
    }
  }

export default App;