import {
    GET_TROUSER_CROTCH_LIST_PROGRESS, GET_TROUSER_CROTCH_LIST_SUCCESS, GET_TROUSER_CROTCH_LIST_FAILURE,
    ADD_TROUSER_CROTCH_PROGRESS, ADD_TROUSER_CROTCH_SUCCESS, ADD_TROUSER_CROTCH_FAILURE,
    EDIT_DELETE_TROUSER_CROTCH_PROGRESS, EDIT_DELETE_TROUSER_CROTCH_SUCCESS, EDIT_DELETE_TROUSER_CROTCH_FAILURE,

    UPLOAD_TROUSER_CROTCH_IMAGE_PROGRESS,
    UPLOAD_TROUSER_CROTCH_IMAGE_SUCCESS,
    UPLOAD_TROUSER_CROTCH_IMAGE_FAILURE,

    RESET_MESSAGE,

} from '../../../../../../types/actionTypes';

const initialState = {
    trouser_crotch: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null,
    trouser_crotch_image: "",
}

const trouser_crotch_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_TROUSER_CROTCH_LIST_SUCCESS:
            return { ...state, trouser_crotch: action.trouser_crotch, loading: false };
        case GET_TROUSER_CROTCH_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_TROUSER_CROTCH_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_TROUSER_CROTCH_PROGRESS:
            return { ...state, loading: true };
        case ADD_TROUSER_CROTCH_SUCCESS:
            return { ...state, trouser_crotch: [...state.trouser_crotch, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_TROUSER_CROTCH_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_TROUSER_CROTCH_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_TROUSER_CROTCH_SUCCESS:
            return {
                ...state,
                trouser_crotch: state.trouser_crotch.map((trouser_crotch) =>
                    trouser_crotch.id === action.payload.id ? action.payload : trouser_crotch
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_TROUSER_CROTCH_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

        case UPLOAD_TROUSER_CROTCH_IMAGE_PROGRESS:
            return { ...state, loading: true };
        case UPLOAD_TROUSER_CROTCH_IMAGE_SUCCESS:
            return { ...state, trouser_crotch_image: action.payload.result || "", loading: false, error: false, };
        case UPLOAD_TROUSER_CROTCH_IMAGE_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default trouser_crotch_master_reducer;