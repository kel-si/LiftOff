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
      posts: []
    };
  }

  fetchData = () => {
    axios
      .get("/api/posts") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        this.setState({
          posts: response.data
        })
      }).catch((error) => {
        console.log(error)
      });

  };

  render() {
    return (
      <div className="App">
        <h1>posts</h1>
        <button onClick={this.fetchData}>Fetch Data</button>
        <PostList posts={this.state.posts} users={users}/>
      </div>
    );
  }
}

export default App;
