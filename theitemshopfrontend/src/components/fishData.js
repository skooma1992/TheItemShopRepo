import React from "react";
import axios from "axios";

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
            <ul>
            {this.state.fish.map(fish => <li key={fish.id}>{fish.name["name-USen"]}<img src={fish.icon_uri} alt="fish"></img></li>)}
            </ul>
        )
    }
}