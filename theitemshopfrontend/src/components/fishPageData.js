import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from './API';

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
            {fish.name && <div>{fish.name["name-USen"]}</div>}
        </div>
    )
}

export default FishPageData;