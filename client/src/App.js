import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import PostListItem from "./components/PostListItem";
import { posts, users } from "./test_data/dummyData";
import PostList from "./components/PostList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Click the button to load data!",
      user_id: 0
    };
  }

  fetchData = () => {
    axios
      .get("/api/data") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        console.log(response.data.text); // Just the message
        this.setState({
          text: response.data.text,
          user_id: response.data.user_id
        })
        
      });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.text}</h1>
        <h1>{this.state.user_id}</h1>
        <button onClick={this.fetchData}>Fetch Data</button>
        <PostList posts={posts} users={users}/>
      </div>
    );
  }
}

export default App;
