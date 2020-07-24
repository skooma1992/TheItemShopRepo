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

    String.prototype.Capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    return (
        <div style={{ marginLeft: "25px", marginRight: "25px" }}>
            <div className="d-flex flex-row flex-wrap justify-content-between" style={{ marginLeft: "50px", marginRight: "50px" }}>
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-start" style={{ marginBottom: "30px", marginTop: "40px", marginLeft: "28px" }}>
                        <div>
                            <img src={fish.icon_uri} />
                        </div>
                    </div>
                    <div className="d-flex flex-column" style={{ width: "200px" }}>
                        <p style={{ fontStyle: "italic" }}>{fish["catch-phrase"]}</p>
                        <ul>
                            <li style={{fontSize: "10px"}}>
                                Average Price: ${fish.price}
                            </li>
                            {fish.availability && <li style={{fontSize: "10px"}}>Typically found: {fish.availability.location}</li>}
                        </ul>
                    </div>
                </div>
                <div className="d-flex justify-content-center" style={{ marginBottom: "20px", marginTop: "50px", marginRight: "550px", marginLeft: "300px" }}>
                    {fish.name && <h1>{fish.name["name-USen"].Capitalize()}</h1>}
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column" style={{ marginRight: "50px" }}>
                <img src={fish.image_uri} style={{ width: "400px", height: "200px" }} />
                <p style={{ fontWeight: "bold", fontSize: "12px", width: "300px" }}>{fish["museum-phrase"]}</p>
            </div>
        </div>
    )
}

export default FishPageData;