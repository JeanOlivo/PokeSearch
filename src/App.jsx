import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Buscador from "./components/Buscador";
import PokeCard from "./components/PokeCard";

function App() {

  const [data, setData] = useState('')
  const [pokemon, setPokemon] = useState('1')
  const [viewCard, setViewCard] = useState(false)

  const getData = (pokeName) => {
    setPokemon(pokeName)
    setViewCard(true)
  }

  useEffect(() => {
    const getPoke = async () => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const data = await response.json()
        const {id, name,} = data
        const {front_default} =  data.sprites.other['official-artwork']

        setData({
          id: id,
          name: name,
          img: front_default,
        })

    }

    getPoke().catch(null)

}, [pokemon])

  return (
    <Container className='mt-5'>
      <Row className='justify-content-md-center mb-5'>
        <Col md='auto'>
          <Buscador getPokeName={(getData)} />
        </Col>
      </Row>
      <Row className='justify-content-md-center'>
        <Col md='auto'>
          {viewCard ? 
            <PokeCard pokeData={data} />
          : undefined
          }
        </Col>
      </Row>
    </Container>
    
  );
}

export default App;
