import {
    GET_SHIRT_BOTTOM_LIST_PROGRESS, GET_SHIRT_BOTTOM_LIST_SUCCESS, GET_SHIRT_BOTTOM_LIST_FAILURE,
    ADD_SHIRT_BOTTOM_PROGRESS, ADD_SHIRT_BOTTOM_SUCCESS, ADD_SHIRT_BOTTOM_FAILURE,
    EDIT_DELETE_SHIRT_BOTTOM_PROGRESS, EDIT_DELETE_SHIRT_BOTTOM_SUCCESS, EDIT_DELETE_SHIRT_BOTTOM_FAILURE,
    
    UPLOAD_SHIRT_BOTTOM_IMAGE_PROGRESS,
    UPLOAD_SHIRT_BOTTOM_IMAGE_SUCCESS,
    UPLOAD_SHIRT_BOTTOM_IMAGE_FAILURE,

    RESET_MESSAGE,

} from '../../../../../../types/actionTypes';

const initialState = {
    shirt_bottom: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null,
    shirt_bottom_image: "",
}

const shirt_bottom_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_SHIRT_BOTTOM_LIST_SUCCESS:
            return { ...state, shirt_bottom: action.shirt_bottom, loading: false };
        case GET_SHIRT_BOTTOM_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_SHIRT_BOTTOM_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_SHIRT_BOTTOM_PROGRESS:
            return { ...state, loading: true };
        case ADD_SHIRT_BOTTOM_SUCCESS:
            return { ...state, shirt_bottom: [...state.shirt_bottom, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_SHIRT_BOTTOM_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_SHIRT_BOTTOM_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_SHIRT_BOTTOM_SUCCESS:
            return {
                ...state,
                shirt_bottom: state.shirt_bottom.map((shirt_bottom) =>
                    shirt_bottom.id === action.payload.id ? action.payload : shirt_bottom
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_SHIRT_BOTTOM_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

            case UPLOAD_SHIRT_BOTTOM_IMAGE_PROGRESS:
                return { ...state, loading: true };
            case UPLOAD_SHIRT_BOTTOM_IMAGE_SUCCESS:
                return { ...state, shirt_bottom_image: action.payload.result || "", loading: false, error: false, };
            case UPLOAD_SHIRT_BOTTOM_IMAGE_FAILURE:
                return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default shirt_bottom_master_reducer;