import {
    GET_TROUSER_POCKET_LIST_PROGRESS, GET_TROUSER_POCKET_LIST_SUCCESS, GET_TROUSER_POCKET_LIST_FAILURE,
    ADD_TROUSER_POCKET_PROGRESS, ADD_TROUSER_POCKET_SUCCESS, ADD_TROUSER_POCKET_FAILURE,
    EDIT_DELETE_TROUSER_POCKET_PROGRESS, EDIT_DELETE_TROUSER_POCKET_SUCCESS, EDIT_DELETE_TROUSER_POCKET_FAILURE,
    
    UPLOAD_TROUSER_POCKET_IMAGE_PROGRESS,
    UPLOAD_TROUSER_POCKET_IMAGE_SUCCESS,
    UPLOAD_TROUSER_POCKET_IMAGE_FAILURE,

    RESET_MESSAGE,

} from '../../../../../../types/actionTypes';

const initialState = {
    trouser_pocket: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null,
    trouser_pocket_image: "",
}

const trouser_pocket_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_TROUSER_POCKET_LIST_SUCCESS:
            return { ...state, trouser_pocket: action.trouser_pocket, loading: false };
        case GET_TROUSER_POCKET_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_TROUSER_POCKET_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_TROUSER_POCKET_PROGRESS:
            return { ...state, loading: true };
        case ADD_TROUSER_POCKET_SUCCESS:
            return { ...state, trouser_pocket: [...state.trouser_pocket, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_TROUSER_POCKET_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_TROUSER_POCKET_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_TROUSER_POCKET_SUCCESS:
            return {
                ...state,
                trouser_pocket: state.trouser_pocket.map((trouser_pocket) =>
                    trouser_pocket.id === action.payload.id ? action.payload : trouser_pocket
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_TROUSER_POCKET_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

            case UPLOAD_TROUSER_POCKET_IMAGE_PROGRESS:
                return { ...state, loading: true };
            case UPLOAD_TROUSER_POCKET_IMAGE_SUCCESS:
                return { ...state, trouser_pocket_image: action.payload.result || "", loading: false, error: false, };
            case UPLOAD_TROUSER_POCKET_IMAGE_FAILURE:
                return { ...state, loading: false, error: action.payload, message: action.payload.message };
    

        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default trouser_pocket_master_reducer;