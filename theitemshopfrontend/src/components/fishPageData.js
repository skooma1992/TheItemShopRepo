import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from './API';
import { propTypes } from "react-bootstrap/esm/Image";

function FishPageData() {

    const [fish, setFish] = useState({})

    const { id } = useParams()
    useEffect(() => {
        API.getIndiFish(id)
            .then(res => setFish(res.data))
            .catch(err => console.log(err));
    }, [])

    return (
        <div>
            <img src={fish.image_uri} />
            {fish.name && <div>{fish.name["name-USen"]}</div>}
            <p>{fish["museum-phrase"]}</p>
        </div>
    )
}

export default FishPageData;