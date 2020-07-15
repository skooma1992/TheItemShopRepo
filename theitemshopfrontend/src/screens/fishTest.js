import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import FishData from "../components/fishData";

function testFishData() {
    return <div>
        <ul><FishData /></ul>
    </div>
}

export default testFishData;