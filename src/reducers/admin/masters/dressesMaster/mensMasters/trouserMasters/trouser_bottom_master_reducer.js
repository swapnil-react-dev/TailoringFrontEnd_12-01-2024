import {
    GET_TROUSER_BOTTOM_LIST_PROGRESS, GET_TROUSER_BOTTOM_LIST_SUCCESS, GET_TROUSER_BOTTOM_LIST_FAILURE,
    ADD_TROUSER_BOTTOM_PROGRESS, ADD_TROUSER_BOTTOM_SUCCESS, ADD_TROUSER_BOTTOM_FAILURE,
    EDIT_DELETE_TROUSER_BOTTOM_PROGRESS, EDIT_DELETE_TROUSER_BOTTOM_SUCCESS, EDIT_DELETE_TROUSER_BOTTOM_FAILURE,

    UPLOAD_TROUSER_BOTTOM_IMAGE_PROGRESS,
    UPLOAD_TROUSER_BOTTOM_IMAGE_SUCCESS,
    UPLOAD_TROUSER_BOTTOM_IMAGE_FAILURE,

    RESET_MESSAGE,

} from '../../../../../../types/actionTypes';

const initialState = {
    trouser_bottom: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null,
    trouser_bottom_image: "",
}

const trouser_bottom_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_TROUSER_BOTTOM_LIST_SUCCESS:
            return { ...state, trouser_bottom: action.trouser_bottom, loading: false };
        case GET_TROUSER_BOTTOM_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_TROUSER_BOTTOM_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_TROUSER_BOTTOM_PROGRESS:
            return { ...state, loading: true };
        case ADD_TROUSER_BOTTOM_SUCCESS:
            return { ...state, trouser_bottom: [...state.trouser_bottom, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_TROUSER_BOTTOM_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_TROUSER_BOTTOM_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_TROUSER_BOTTOM_SUCCESS:
            return {
                ...state,
                trouser_bottom: state.trouser_bottom.map((trouser_bottom) =>
                    trouser_bottom.id === action.payload.id ? action.payload : trouser_bottom
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_TROUSER_BOTTOM_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case UPLOAD_TROUSER_BOTTOM_IMAGE_PROGRESS:
            return { ...state, loading: true };
        case UPLOAD_TROUSER_BOTTOM_IMAGE_SUCCESS:
            return { ...state, trouser_bottom_image: action.payload.result || "", loading: false, error: false, };
        case UPLOAD_TROUSER_BOTTOM_IMAGE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default trouser_bottom_master_reducer;