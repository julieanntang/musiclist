import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import './App.css';
import Songs from "./Songs";
import SongForm from "./SongForm";

class App extends Component {
  state = {
    songs : [
      { id: 1, title: "never gonna give you up", artist: "bill" },
      { id: 2, title: "always and forever", artist: "jane doe" },
      { id: 3, title: "life without adventure", artist: "jim joe" },
    ],
  };

  componentDidMount() {
    console.log("mounted");
  };

  componentDidUpdate() {
    console.log("updated");
  };

  deleteSong = (id) => {
    let filteredSongs = this.state.songs.filter((s) => s.id !== id);
    this.setState({
      songs: filteredSongs, 
    });
  }

  addSong = (song) => {
    console.log(song);
    this.setState({
      songs: [song, ...this.state.songs],
    });
  };

  updateSong = (song) => {
    let updatedSongs = this.state.songs.map((s) => s.id === song.id ? song : s)

    this.setState({
      songs: updatedSongs,
    });
  };

  render() {
    return (
      <Container>
        <SongForm addSong={this.addSong} />
        <Songs updateSong={this.updateSong} deleteSong={this.deleteSong} songs={this.state.songs} />
      </Container>
    );
  }
}

export default App;
