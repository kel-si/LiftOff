import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import PostList from "./components/PostList";
import Navbar from "./components/Navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      users: [],
    };
  }

  fetchData = () => {
    axios
      .get("/api/feed") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log(response.data); // The entire response from the Rails API

        this.setState({
          posts: response.data.posts,
          users: response.data.users,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <button onClick={this.fetchData}>Fetch Data</button>
        <PostList posts={this.state.posts} users={this.state.users} />
      </div>
    );
  }
}

export default App;
