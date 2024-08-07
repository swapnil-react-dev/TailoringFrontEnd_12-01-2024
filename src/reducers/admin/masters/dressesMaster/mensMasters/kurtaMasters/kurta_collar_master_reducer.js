import {
    GET_KURTA_COLLAR_LIST_PROGRESS, GET_KURTA_COLLAR_LIST_SUCCESS, GET_KURTA_COLLAR_LIST_FAILURE,
    ADD_KURTA_COLLAR_PROGRESS, ADD_KURTA_COLLAR_SUCCESS, ADD_KURTA_COLLAR_FAILURE,
    EDIT_DELETE_KURTA_COLLAR_PROGRESS, EDIT_DELETE_KURTA_COLLAR_SUCCESS, EDIT_DELETE_KURTA_COLLAR_FAILURE,

    UPLOAD_KURTA_COLLAR_IMAGE_PROGRESS,
    UPLOAD_KURTA_COLLAR_IMAGE_SUCCESS,
    UPLOAD_KURTA_COLLAR_IMAGE_FAILURE,
    RESET_MESSAGE,

} from '../../../../../../types/actionTypes';

const initialState = {
    kurta_collar : [],
    loginUser: null,
    error: false,
    loading: false,
    message: null,
    kurta_collar_image: " ",
}

const kurta_collar_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case  GET_KURTA_COLLAR_LIST_SUCCESS:
            return { ...state, kurta_collar: action.kurta_collar, loading: false };
        case GET_KURTA_COLLAR_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_KURTA_COLLAR_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_KURTA_COLLAR_PROGRESS:
            return { ...state, loading: true };
        case ADD_KURTA_COLLAR_SUCCESS:
            return { ...state, kurta_collar: [...state.kurta_collar, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_KURTA_COLLAR_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_KURTA_COLLAR_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_KURTA_COLLAR_SUCCESS:
            return {
                ...state,
                kurta_collar: state.kurta_collar.map((kurta_collar) =>
                kurta_collar.id === action.payload.id ? action.payload : kurta_collar
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_KURTA_COLLAR_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case UPLOAD_KURTA_COLLAR_IMAGE_PROGRESS:
            return { ...state, loading: true };
        case UPLOAD_KURTA_COLLAR_IMAGE_SUCCESS:
            return { ...state, kurta_collar_image: action.payload.result || "", loading: false, error: false, };
        case UPLOAD_KURTA_COLLAR_IMAGE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default kurta_collar_master_reducer;