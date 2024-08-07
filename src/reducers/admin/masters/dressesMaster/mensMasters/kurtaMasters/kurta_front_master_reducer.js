import {
    GET_KURTA_FRONT_LIST_PROGRESS, GET_KURTA_FRONT_LIST_SUCCESS, GET_KURTA_FRONT_LIST_FAILURE,
    ADD_KURTA_FRONT_PROGRESS, ADD_KURTA_FRONT_SUCCESS, ADD_KURTA_FRONT_FAILURE,
    EDIT_DELETE_KURTA_FRONT_PROGRESS, EDIT_DELETE_KURTA_FRONT_SUCCESS, EDIT_DELETE_KURTA_FRONT_FAILURE,

    UPLOAD_KURTA_FRONT_IMAGE_PROGRESS,
    UPLOAD_KURTA_FRONT_IMAGE_SUCCESS,
    UPLOAD_KURTA_FRONT_IMAGE_FAILURE,
    RESET_MESSAGE,

} from '../../../../../../types/actionTypes';

const initialState = {
    kurta_front : [],
    loginUser: null,
    error: false,
    loading: false,
    message: null,
    kurta_front_image: " ",
}

const kurta_front_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case  GET_KURTA_FRONT_LIST_SUCCESS:
            return { ...state, kurta_front: action.kurta_front, loading: false };
        case GET_KURTA_FRONT_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_KURTA_FRONT_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_KURTA_FRONT_PROGRESS:
            return { ...state, loading: true };
        case ADD_KURTA_FRONT_SUCCESS:
            return { ...state, kurta_front: [...state.kurta_front, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_KURTA_FRONT_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_KURTA_FRONT_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_KURTA_FRONT_SUCCESS:
            return {
                ...state,
                kurta_front: state.kurta_front.map((kurta_front) =>
                kurta_front.id === action.payload.id ? action.payload : kurta_front
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_KURTA_FRONT_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case UPLOAD_KURTA_FRONT_IMAGE_PROGRESS:
            return { ...state, loading: true };
        case UPLOAD_KURTA_FRONT_IMAGE_SUCCESS:
            return { ...state, kurta_front_image: action.payload.result || "", loading: false, error: false, };
        case UPLOAD_KURTA_FRONT_IMAGE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default kurta_front_master_reducer;