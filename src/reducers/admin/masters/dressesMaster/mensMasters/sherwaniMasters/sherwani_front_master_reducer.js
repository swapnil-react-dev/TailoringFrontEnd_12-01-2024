import {
    GET_SHERWANI_FRONT_LIST_PROGRESS, GET_SHERWANI_FRONT_LIST_SUCCESS, GET_SHERWANI_FRONT_LIST_FAILURE,
    ADD_SHERWANI_FRONT_PROGRESS, ADD_SHERWANI_FRONT_SUCCESS, ADD_SHERWANI_FRONT_FAILURE,
    EDIT_DELETE_SHERWANI_FRONT_PROGRESS, EDIT_DELETE_SHERWANI_FRONT_SUCCESS, EDIT_DELETE_SHERWANI_FRONT_FAILURE,

    UPLOAD_SHERWANI_FRONT_IMAGE_PROGRESS,
    UPLOAD_SHERWANI_FRONT_IMAGE_SUCCESS,
    UPLOAD_SHERWANI_FRONT_IMAGE_FAILURE,
    RESET_MESSAGE,

} from '../../../../../../types/actionTypes';

const initialState = {
    sherwani_front : [],
    loginUser: null,
    error: false,
    loading: false,
    message: null,
    sherwani_front_image: " ",
}

const sherwani_front_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case  GET_SHERWANI_FRONT_LIST_SUCCESS:
            return { ...state, sherwani_front: action.sherwani_front, loading: false };
        case GET_SHERWANI_FRONT_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_SHERWANI_FRONT_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_SHERWANI_FRONT_PROGRESS:
            return { ...state, loading: true };
        case ADD_SHERWANI_FRONT_SUCCESS:
            return { ...state, sherwani_front: [...state.sherwani_front, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_SHERWANI_FRONT_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_SHERWANI_FRONT_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_SHERWANI_FRONT_SUCCESS:
            return {
                ...state,
                sherwani_front: state.sherwani_front.map((sherwani_front) =>
                sherwani_front.id === action.payload.id ? action.payload : sherwani_front
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_SHERWANI_FRONT_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case UPLOAD_SHERWANI_FRONT_IMAGE_PROGRESS:
            return { ...state, loading: true };
        case UPLOAD_SHERWANI_FRONT_IMAGE_SUCCESS:
            return { ...state, sherwani_front: action.payload.result || "", loading: false, error: false, };
        case UPLOAD_SHERWANI_FRONT_IMAGE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default sherwani_front_master_reducer;