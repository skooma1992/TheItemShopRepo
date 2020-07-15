import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'

export default function FishCard(props) {

        return (
            <Container fluid>
                <Row md={3}>
                    <Col>
                    <Card style={{ width: '18rem' }} key={props.id}>
                        <Card.Img variant="top" src={props.icon_uri} alt="fish" />
                        <Card.Body>
                            <Card.Title>{props.name["name-USen"]}</Card.Title>
                            <Card.Text>
                                Found: {props.location}
                            </Card.Text>
                            <Button variant="primary">This doesn't work yet</Button>
                        </Card.Body>
                    </Card >
                    </Col>
                </Row>
            </Container>
        )

}