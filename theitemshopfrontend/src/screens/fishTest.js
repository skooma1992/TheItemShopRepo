import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FishData from "../components/fishData";
import Container from 'react-bootstrap/Container';

function testFishData() {
    return <div style={{display: "flex", flexWrap: "wrap", flexDirection: "row"}}>
            <FishData />
        </div>
    
}

export default testFishData;