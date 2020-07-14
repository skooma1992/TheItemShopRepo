import { FISH_LIST_REQUEST, FISH_LIST_SUCCESS, FISH_LIST_FAIL, FISH_DATA_REQUEST, FISH_DATA_SUCCESS, FISH_DATA_FAIL } from "../constants/fishConstants";
import axios from "axios";

const fishData = () => async (dispatch) => {
    try {
        dispatch({ type: FISH_DATA_REQUEST });
        const { data } = await axios.get("https://acnhapi.com/v1/fish");
        dispatch({ type: FISH_DATA_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: FISH_DATA_FAIL, payload: error.message });

    }
}

const listOfFish = (id) => async (dispatch) => {
    try {
        dispatch({ type: FISH_LIST_REQUEST });
        const { data } = await axios.get("https://acnhapi.com/v1/fish/" + id);
        dispatch({ type: FISH_LIST_SUCCESS, payload: data });
    }
    catch (error) {
        dispatch({ type: FISH_LIST_FAIL, payload: error.message });
    }
}

export { fishData, listOfFish }
