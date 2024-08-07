import {
    GET_ITEM_LIST_PROGRESS, GET_ITEM_LIST_SUCCESS, GET_ITEM_LIST_FAILURE,
    ADD_ITEM_PROGRESS, ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE,
    EDIT_DELETE_ITEM_PROGRESS, EDIT_DELETE_ITEM_SUCCESS, EDIT_DELETE_ITEM_FAILURE,

    RESET_MESSAGE,

} from '../../../../types/actionTypes';

const initialState = {
    item: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const item_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ITEM_LIST_SUCCESS:
            return { ...state, item: action.item, loading: false };
        case GET_ITEM_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_ITEM_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_ITEM_PROGRESS:
            return { ...state, loading: true };
        case ADD_ITEM_SUCCESS:
            return { ...state, item: [...state.item, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_ITEM_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_ITEM_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_ITEM_SUCCESS:
            return {
                ...state,
                item: state.item.map((item) =>
                    item.id === action.payload.id ? action.payload : item
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_ITEM_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default item_master_reducer;