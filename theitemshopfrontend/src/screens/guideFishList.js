import React from 'react';
import FishData from "../components/fishData";

function guideFishList() {
    return <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row"}}>
            <FishData />
        </div>
    
}

export default guideFishList;