import {
    GET_ITEM_CATEGORY_LIST_PROGRESS, GET_ITEM_CATEGORY_LIST_SUCCESS, GET_ITEM_CATEGORY_LIST_FAILURE,
    
    RESET_MESSAGE,

} from '../../../../types/actionTypes';

const initialState = {
    item_category: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const item_category_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_ITEM_CATEGORY_LIST_SUCCESS:
            return { ...state, item_category: action.item_category, loading: false };
        case GET_ITEM_CATEGORY_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_ITEM_CATEGORY_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
       
        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default item_category_master_reducer;