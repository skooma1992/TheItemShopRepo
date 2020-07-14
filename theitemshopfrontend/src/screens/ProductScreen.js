import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch, connect } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
// import { fishData } from '../actions/fishDataActions';
import FishData from "../components/fishData";

function ProductScreen(props) {
    const [qty, setQty] = useState(1);
    const dataFish = useSelector(state => state.dataFish);
    const dispatch = useDispatch();
    const { loading, product } = props.fishData;


    // useEffect(() => {
    //     dispatch(fishData(props.match.params.id)).then((res) => {
    //         console.log(res)
    //     })
    //     return () => {

    //     }
    // }, []);

    // MATCHING QTY WITH NEW QTY
    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }

    const displayFishData = () => {
        if (props.fishData.length) {
            return props.fishData.map(fish => {
                return (
                    // JSX goes here
                    <div>
                        <div className="details">
                            <div className="details-image">
                                <img src={product.fish[1].image_uri} alt="fish"></img>
                            </div>
                            <div className="details-info">
                                <ul>
                                    <li>
                                        <h4>{product.fish["file-name"]}</h4>
                                    </li>
                                    <li>
                                        <b>${fish.price}</b>
                                    </li>
                                    <li>
                                        Description:
                                        <div>
                                            {fish["museum-phrase"]}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                );
            })
        }
    }

    return loading? <div>Loading...</div> :
    // error? <div>{error}</div>:
    <div>
        <div className="back-to-result">
            <Link to="/">Back to results</Link>
        </div>
        <ul>
        {/* {displayFishData(product)} */}
        <FishData />
        </ul>
    </div>
}

const mapStateToProps = (state) => ({
    fishData: state.fishData
})
export default connect(mapStateToProps)(ProductScreen);