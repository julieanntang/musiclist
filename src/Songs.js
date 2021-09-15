import React from "react";
import { Button, Header, Table } from "semantic-ui-react";
import Song from "./Song";
import styled from "styled-components";

const Songs = ({ songs, deleteSong, updateSong }) => (
  <>
  <Header as="h1" textAlign="center">
    SONG LIST
  </Header>
  
  <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Title</Table.HeaderCell>
          <Table.HeaderCell>Artist</Table.HeaderCell>
          <Table.HeaderCell>Options</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {songs.map((song) => (
          <Song updateSong={updateSong} deleteSong={deleteSong} {...song} />
        ))}
      </Table.Body>
    </Table></>
);


export default Songs;