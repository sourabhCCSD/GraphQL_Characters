import React from "react";
import { Link } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";


const CharactersList = () => {

    const {error, loading, data} = useCharacters()


  if (loading) {
    return <div>spinner...</div>;
  }

  if (error) {
    <div>something went wrong</div>;
  }


  return (
    <div>
    <div style={{marginTop: '80px', fontSize: '40px', marginBottom: '60px'}}>Characters</div>
    <Link to="/search" style={{marginTop: '40px', fontSize: '20px', marginBottom: '60px'}}>Search Location of any character</Link>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        margin: "20px",
      }}
    >
     
      {data.characters.results.map((character) => (
        <div /* onClick={() => handleCharacterClick(character.id)} */ key={character.id}>
          <Link to={`/${character.id}`}>
          <img alt={character.name} src={character.image} />
          <h3>{character.name}</h3>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
};

export default CharactersList;
