import React from 'react';
import FishData from "../components/fishData";
import { MDBContainer, MDBScrollbar } from "mdbreact";
import "../component_css/scrollbar.css";

function guideFishList() {
    const scrollContainerStyle = { width: "95%", maxHeight: "600px" };
    return (
        <MDBContainer style={{marginTop: "50px"}}>
            <div className="scrollbar scrollbar-near-moon mt-5 mx-auto" style={scrollContainerStyle}>
                <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
                    <FishData />            
                </div>
            </div>
        </MDBContainer>
    )
}

export default guideFishList;