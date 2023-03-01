import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { Link } from "react-router-dom";

// lazy quries are the ones where the query runs only after user perform some action.
// and not unlike a normal query where the query runs after the render.
// for lazy queries we NEVER make custom hook.

const AllCharacters = [
  "Rick Sanchez",
  "Morty Smith",
  "Summer Smith",
  "Beth Smith",
  "Jerry Smith",
  "Abadango Cluster Princess",
  "Abradolf Lincler",
  "Adjudicator Rick",
  "Agency Director",
  "Alan Rails",
  "Albert Einstein",
  "Alexander",
  "Alien Googah",
  "Alien Morty",
  "Alien Rick",
  "Amish Cyborg",
  "Annie",
  "Antenna Morty",
  "Antenna Rick",
  "Ants in my Eyes Johnson",
];

const GET_CHARACTER_LOCATIONS = gql`
  query getCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState("");

  const [getCharacterLocations, { error, loading, data, called }] =
    useLazyQuery(GET_CHARACTER_LOCATIONS, {
      variables: {
        name,
      },
    });

  return (
    <div>
      <div
        style={{
          fontSize: "30px",
          display: "flex",
          justifyContent: "center",
          marginTop: "60px",
        }}
      >
        Lazy Quries - Query that runs in response to a user action
      </div>
      <div>Type in name of any character to search their location</div>
      <div style={{ marginTop: "30px" }}>
        <Link
          to="/"
          style={{
            padding: "1rem",
            marginTop: "20px",
            backgroundColor: "#EFB442",
            color: "black",
            borderRadius: "15px",
          }}
        >
          GO Back
        </Link>
      </div>

<div style={{display: 'flex' , flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px', padding:'40px'}}>
      {AllCharacters.map((char) => (
        <h4 style={{marginLeft: '30px'}}>
          {char}
        </h4>
      ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <div>
          <input
            placeholder="Search Location from name.."
            style={{
              height: "30px",
              width: "400px",
              paddingLeft: "10px",
              fontSize: "16px",
              outline: "none",
            }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <button
            style={{
              height: "36px",
              width: "100px",
              backgroundColor: "#19474F",
              color: "white",
              fontSize: "20px",
              marginLeft: "40px",
            }}
            onClick={() => getCharacterLocations(name)}
          >
            Search
          </button>
        </div>
      </div>

      <div>
        {data &&
          data.characters.results.map((character) => (
            <h4>{character.location.name}</h4>
          ))}
      </div>
    </div>
  );
};

export default Search;
