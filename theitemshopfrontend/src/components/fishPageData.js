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
        <div style={{ marginLeft: "25px", marginRight: "25px" }}>
            <div style={{ marginLeft: "50px", marginRight: "50px" }}>
                <div className="d-flex justify-content-center" style={{ marginBottom: "254px" }}>
                    {fish.name && <h1>{fish.name["name-USen"]}</h1>}
                </div>
                <div className="d-flex justify-content-start" style={{}}>
                    <div>
                        <img src={fish.icon_uri} />
                    </div>
                </div>
                <p>{fish["museum-phrase"]}</p>
            </div>
        </div>
    )
}

export default FishPageData;