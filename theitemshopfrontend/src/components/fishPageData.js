import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from './API';
import "../component_css/fishpage.css"

function FishPageData() {

    const [fish, setFish] = useState({})

    const { id } = useParams()
    useEffect(() => {
        API.getIndiFish(id)
            .then(res => setFish(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div style={{margin: "25px"}}>
            <div style={{margin: "50px"}}>
                <img src={fish.image_uri} style={{}}/>
                {fish.name && <div>{fish.name["name-USen"]}</div>}
                <p>{fish["museum-phrase"]}</p>
            </div>
        </div>
    )
}

export default FishPageData;