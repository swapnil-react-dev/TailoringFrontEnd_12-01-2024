import {
    GET_SHERWANI_COLLAR_LIST_PROGRESS, GET_SHERWANI_COLLAR_LIST_SUCCESS, GET_SHERWANI_COLLAR_LIST_FAILURE,
    ADD_SHERWANI_COLLAR_PROGRESS, ADD_SHERWANI_COLLAR_SUCCESS, ADD_SHERWANI_COLLAR_FAILURE,
    EDIT_DELETE_SHERWANI_COLLAR_PROGRESS, EDIT_DELETE_SHERWANI_COLLAR_SUCCESS, EDIT_DELETE_SHERWANI_COLLAR_FAILURE,

    UPLOAD_SHERWANI_COLLAR_IMAGE_PROGRESS,
    UPLOAD_SHERWANI_COLLAR_IMAGE_SUCCESS,
    UPLOAD_SHERWANI_COLLAR_IMAGE_FAILURE,
    RESET_MESSAGE,

} from '../../../../../../types/actionTypes';

const initialState = {
    sherwani_collar : [],
    loginUser: null,
    error: false,
    loading: false,
    message: null,
    sherwani_collar_image: " ",
}

const sherwani_collar_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case  GET_SHERWANI_COLLAR_LIST_SUCCESS:
            return { ...state, sherwani_collar: action.sherwani_collar, loading: false };
        case GET_SHERWANI_COLLAR_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_SHERWANI_COLLAR_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_SHERWANI_COLLAR_PROGRESS:
            return { ...state, loading: true };
        case ADD_SHERWANI_COLLAR_SUCCESS:
            return { ...state, sherwani_collar: [...state.sherwani_collar, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_SHERWANI_COLLAR_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_SHERWANI_COLLAR_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_SHERWANI_COLLAR_SUCCESS:
            return {
                ...state,
                sherwani_collar: state.sherwani_collar.map((sherwani_collar) =>
                sherwani_collar.id === action.payload.id ? action.payload : sherwani_collar
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_SHERWANI_COLLAR_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case UPLOAD_SHERWANI_COLLAR_IMAGE_PROGRESS:
            return { ...state, loading: true };
        case UPLOAD_SHERWANI_COLLAR_IMAGE_SUCCESS:
            return { ...state, sherwani_collar_image: action.payload.result || "", loading: false, error: false, };
        case UPLOAD_SHERWANI_COLLAR_IMAGE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default sherwani_collar_master_reducer;