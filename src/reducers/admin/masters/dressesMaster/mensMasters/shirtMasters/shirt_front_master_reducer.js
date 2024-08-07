import {
    GET_SHIRT_FRONT_LIST_PROGRESS, GET_SHIRT_FRONT_LIST_SUCCESS, GET_SHIRT_FRONT_LIST_FAILURE,
    ADD_SHIRT_FRONT_PROGRESS, ADD_SHIRT_FRONT_SUCCESS, ADD_SHIRT_FRONT_FAILURE,
    EDIT_DELETE_SHIRT_FRONT_PROGRESS, EDIT_DELETE_SHIRT_FRONT_SUCCESS, EDIT_DELETE_SHIRT_FRONT_FAILURE,

    UPLOAD_SHIRT_FRONT_IMAGE_PROGRESS,
    UPLOAD_SHIRT_FRONT_IMAGE_SUCCESS,
    UPLOAD_SHIRT_FRONT_IMAGE_FAILURE,

    RESET_MESSAGE,

} from '../../../../../../types/actionTypes';

const initialState = {
    shirt_front: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null,
    shirt_front_image: "",
}

const shirt_front_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_SHIRT_FRONT_LIST_SUCCESS:
            return { ...state, shirt_front: action.shirt_front, loading: false };
        case GET_SHIRT_FRONT_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_SHIRT_FRONT_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_SHIRT_FRONT_PROGRESS:
            return { ...state, loading: true };
        case ADD_SHIRT_FRONT_SUCCESS:
            return { ...state, shirt_front: [...state.shirt_front, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_SHIRT_FRONT_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_SHIRT_FRONT_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_SHIRT_FRONT_SUCCESS:
            return {
                ...state,
                shirt_front: state.shirt_front.map((shirt_front) =>
                    shirt_front.id === action.payload.id ? action.payload : shirt_front
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_SHIRT_FRONT_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case UPLOAD_SHIRT_FRONT_IMAGE_PROGRESS:
            return { ...state, loading: true };
        case UPLOAD_SHIRT_FRONT_IMAGE_SUCCESS:
            return { ...state, shirt_front_image: action.payload.result || "", loading: false, error: false, };
        case UPLOAD_SHIRT_FRONT_IMAGE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default shirt_front_master_reducer;