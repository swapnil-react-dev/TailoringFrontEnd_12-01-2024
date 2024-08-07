import {
    GET_ORDERS_LIST_PROGRESS, GET_ORDERS_LIST_SUCCESS, GET_ORDERS_LIST_FAILURE,
    RESET_MESSAGE,
} from '../../../../types/actionTypes';

const initialState = {
    orders: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const orders_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ORDERS_LIST_SUCCESS:
            return { ...state, orders: action.orders, loading: false };
        case GET_ORDERS_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_ORDERS_LIST_PROGRESS:
            return { ...state, loading: true, error: false };

        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default orders_reducer;