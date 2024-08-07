import {
    GET_SHIRT_BACKPLEAT_LIST_PROGRESS, GET_SHIRT_BACKPLEAT_LIST_SUCCESS, GET_SHIRT_BACKPLEAT_LIST_FAILURE,
    ADD_SHIRT_BACKPLEAT_PROGRESS, ADD_SHIRT_BACKPLEAT_SUCCESS, ADD_SHIRT_BACKPLEAT_FAILURE,
    EDIT_DELETE_SHIRT_BACKPLEAT_PROGRESS, EDIT_DELETE_SHIRT_BACKPLEAT_SUCCESS, EDIT_DELETE_SHIRT_BACKPLEAT_FAILURE,
    
    UPLOAD_SHIRT_BACKPLEAT_IMAGE_PROGRESS,
    UPLOAD_SHIRT_BACKPLEAT_IMAGE_SUCCESS,
    UPLOAD_SHIRT_BACKPLEAT_IMAGE_FAILURE,

    RESET_MESSAGE,

} from '../../../../../../types/actionTypes';

const initialState = {
    shirt_backpleat: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null,
    shirt_backpleat_image: "", 
}

const shirt_backPleat_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_SHIRT_BACKPLEAT_LIST_SUCCESS:
            return { ...state, shirt_backpleat: action.shirt_backpleat, loading: false };
        case GET_SHIRT_BACKPLEAT_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_SHIRT_BACKPLEAT_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_SHIRT_BACKPLEAT_PROGRESS:
            return { ...state, loading: true };
        case ADD_SHIRT_BACKPLEAT_SUCCESS:
            return { ...state, shirt_backpleat: [...state.shirt_backpleat, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_SHIRT_BACKPLEAT_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_SHIRT_BACKPLEAT_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_SHIRT_BACKPLEAT_SUCCESS:
            return {
                ...state,
                shirt_backpleat: state.shirt_backpleat.map((shirt_backpleat) =>
                    shirt_backpleat.id === action.payload.id ? action.payload : shirt_backpleat
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_SHIRT_BACKPLEAT_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };

            case UPLOAD_SHIRT_BACKPLEAT_IMAGE_PROGRESS:
                return { ...state, loading: true };
            case UPLOAD_SHIRT_BACKPLEAT_IMAGE_SUCCESS:
                return { ...state, shirt_backpleat_image: action.payload.result || "", loading: false, error: false, };
            case UPLOAD_SHIRT_BACKPLEAT_IMAGE_FAILURE:
                return { ...state, loading: false, error: action.payload, message: action.payload.message };
    
        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default shirt_backPleat_master_reducer;