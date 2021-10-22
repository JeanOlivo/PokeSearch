import React, { useState } from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'

const Buscador = (props) => {
    
    const {getPokeName} = props
    
    const [pokeName, setPokename] = useState('')
    

    const searchSubmit = (e) => {
        e.preventDefault()
        const sendName = () => {
            let sendPokeName = pokeName.toLowerCase()
            getPokeName(sendPokeName)
        }
        sendName()
    }

    
    return (
        <Container>
            <Row className='justify-content-md-center mb-5'>
                <Col md='auto'>
                    <h1>
                        Busca tu Pokemon
                    </h1>
                </Col>
            </Row>
            <Row className='justify-content-md-center'>
                <Col md='auto'>
                    <Form className='d-grid gap-2' style={{ width: '18rem' }} onSubmit={searchSubmit}>
                        <Form.Control 
                            type='text' 
                            placeholder='Nombre o ID de la Pokedex'
                            onChange={(e) => {setPokename(e.target.value)}}
                            required
                        />
                        <Button className='btn-dark' type='submit'>
                            Buscar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Buscador
