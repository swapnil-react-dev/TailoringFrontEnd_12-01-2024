import {
    GET_ORDER_ISSUE_LIST_PROGRESS, GET_ORDER_ISSUE_LIST_SUCCESS, GET_ORDER_ISSUE_LIST_FAILURE,
    ADD_ORDER_ISSUE_PROGRESS, ADD_ORDER_ISSUE_SUCCESS, ADD_ORDER_ISSUE_FAILURE,
    EDIT_DELETE_ORDER_ISSUE_PROGRESS, EDIT_DELETE_ORDER_ISSUE_SUCCESS, EDIT_DELETE_ORDER_ISSUE_FAILURE,
    RESET_MESSAGE,
} from '../../../../types/actionTypes';

const initialState = {
    order_issue: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const order_issue_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ORDER_ISSUE_LIST_SUCCESS:
            return { ...state, order_issue: action.order_issue, loading: false };
        case GET_ORDER_ISSUE_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_ORDER_ISSUE_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_ORDER_ISSUE_PROGRESS:
            return { ...state, loading: true };
        case ADD_ORDER_ISSUE_SUCCESS:
            return { ...state, order_issue: [...state.order_issue, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_ORDER_ISSUE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_ORDER_ISSUE_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_ORDER_ISSUE_SUCCESS:
            return {
                ...state,
                order_issue: state.order_issue.map((order_issue) =>
                order_issue.id === action.payload.id ? action.payload : order_issue
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_ORDER_ISSUE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default order_issue_reducer;