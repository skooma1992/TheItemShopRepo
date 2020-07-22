import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function FishCard(props) {

        return (
                    <Card style={{ width: '18rem'}} key={props.id}>
                        <Card.Img variant="top" src={props.icon_uri} alt="fish" />
                        <Card.Body>
                            <Card.Title>{props.name["name-USen"]}</Card.Title>
                            <Card.Text>
                                Rarity: {props.rarity}
                                <br />
                                Price: ${props.price}
                            </Card.Text>
                            <Link to={"/fish/" + props.id}><Button variant="primary">See More!</Button></Link>
                        </Card.Body>
                    </Card >
        )

}