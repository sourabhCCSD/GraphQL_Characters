import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useParticularCharacter } from "../hooks/useParticularCharacter";

const ParticularCharacter = () => {

  const {id} = useParams();

  const { error, loading,  data } = useParticularCharacter(id);

  console.log( error, loading, data);
  
if(error) {
  return (
    <span>Something went wrong</span>
  )
}

if(loading) {
  return(
    <span>Loading...</span>
  )
}

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        marginTop: "50px",
      }}
    >




     <div>
        <img src={data.character.image} style={{ width: 600, height: 600 }} />
        <div style={{marginTop: '30px'}}>
        <Link to='/' style={{padding: '1rem', backgroundColor: '#EFB442',color: 'black', borderRadius: '15px' }}>GO Back</Link>
        </div>
      </div> 
     
   <div style={{ marginLeft: "100px" }}>
        <h2>{data.character.name}</h2>
        <h3 style={{color: 'gray'}}>{data.character.gender}</h3>
       <div>
          {data.character.episode.map((episode) => 
          (
            <h6>{episode.name} - {episode.episode}</h6>
          ))}
        </div> 
      </div> 

      
    </div>
  );
};

export default ParticularCharacter;
