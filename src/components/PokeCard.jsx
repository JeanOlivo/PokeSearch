import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const PokeCard = (props) => {

    const {id, name, img, } = props.pokeData

    return (
        <Container md='auto'>
            <Row className='justify-content-md-center'>
                <Col md='auto'>
                <Card style={{ width: '18rem' }}>
                <Card.Img className='bg-secondary.bg-gradient' variant='top' src={img} />
                <Card.Body>
                    <Card.Text>
                        #{id}
                    </Card.Text>
                    <Card.Title>
                        <h2>{name}</h2>
                    </Card.Title>
                </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default PokeCard
