import React, { useEffect, useState } from 'react'
import { Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'

const Atores = ({ navigatin, route }) => {

    const [ator, setAtor] = useState([])
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        const id = route.params.id
        apiFilmes.get(`/movie/${id}`).then(resultado => {
          setAtor(resultado.data)
        })

    },[])

  return (
    <>
    <Text>{Ator.name}</Text>
    <Text>{Ator.biography}</Text>
    <Text>{Ator.birthday}</Text>
    <Text>{Ator.place_of_birth}</Text>
    
    </>
  
  )
}

export default Atores