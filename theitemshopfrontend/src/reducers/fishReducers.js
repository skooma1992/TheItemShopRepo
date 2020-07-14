import { FISH_LIST_REQUEST, FISH_LIST_SUCCESS, FISH_LIST_FAIL, FISH_DATA_REQUEST, FISH_DATA_SUCCESS, FISH_DATA_FAIL } from "../constants/fishConstants";




// TAKE IN PREVIOUS STATE AND ACTION AND RETURN NEXT STATE OF PRODUCT LIST
function fishListReducer(state = { fish: {} }, action) {
    switch (action.type) {
        case FISH_LIST_REQUEST:
            return { loading: true };
        case FISH_LIST_SUCCESS:
            return { loading: false, products: action.payload };
        case FISH_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}
// TAKE IN PREVIOUS STATE AND ACTION AND RETURN NEXT STATE OF PRODUCT DETAILS
function fishDataReducer(state = { fish: {} }, action) {
    switch (action.type) {
        case FISH_DATA_REQUEST:
            return { loading: true };
        case FISH_DATA_SUCCESS:
            return { loading: false, product: action.payload };
        case FISH_DATA_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state;
    }
}


export { fishListReducer, fishDataReducer };