import React from "react";
import axios from "axios";
import FishCard from "./fishCard";

export default class FishData extends React.Component{
    state = {
        fish: []
    }

    componentDidMount(){
        axios.get("https://acnhapi.com/v1a/fish").then(res => {

        this.setState({fish: res.data})
    });
    }

    render() {
        return (
        this.state.fish.map(card => (<FishCard name={card.name} image_uri={card.image_uri} location={card.location} id={card.id} key={card.id} icon_uri={card.icon_uri}/>))
        )
    }
}