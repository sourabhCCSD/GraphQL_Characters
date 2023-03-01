import { gql, useQuery } from "@apollo/client";

// whenever the query is taking an ID it will always be given a name just like in line no 6. inside the name we specify the id and the type of id. So $id is the id and ID is the type of id with ! as to make it (required).

const GET_PARTICULAR_CHARACTER = gql`
    query GetParticularCharacter ($id: ID!) {    
        character(id: $id) {
            name
            id
            image
            gender
            episode {
                name
                episode
            }
        }
    }
`

export const useParticularCharacter = (id) => {
  const {error, loading, data} = useQuery(GET_PARTICULAR_CHARACTER, {
        variables : {
            id
        }
    })

    return {
    error,
    loading,
        data
        
    }
}