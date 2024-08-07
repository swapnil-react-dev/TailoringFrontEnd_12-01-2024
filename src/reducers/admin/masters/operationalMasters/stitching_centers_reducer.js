import {
    GET_STITCHING_CENTERS_LIST_PROGRESS, GET_STITCHING_CENTERS_LIST_SUCCESS, GET_STITCHING_CENTERS_LIST_FAILURE,
    ADD_STITCHING_CENTERS_PROGRESS, ADD_STITCHING_CENTERS_SUCCESS, ADD_STITCHING_CENTERS_FAILURE,
    EDIT_DELETE_STITCHING_CENTERS_PROGRESS, EDIT_DELETE_STITCHING_CENTERS_SUCCESS, EDIT_DELETE_STITCHING_CENTERS_FAILURE,
    
    RESET_MESSAGE,

} from '../../../../types/actionTypes';

const initialState = {
    stitching_centers: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const stitching_centers_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_STITCHING_CENTERS_LIST_SUCCESS:
            return { ...state, stitching_centers: action.stitching_centers, loading: false };
        case GET_STITCHING_CENTERS_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_STITCHING_CENTERS_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_STITCHING_CENTERS_PROGRESS:
            return { ...state, loading: true };
        case ADD_STITCHING_CENTERS_SUCCESS:
            return { ...state, stitching_centers: [...state.stitching_centers, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_STITCHING_CENTERS_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_STITCHING_CENTERS_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_STITCHING_CENTERS_SUCCESS:
            return {
                ...state,
                stitching_centers: state.stitching_centers.map((stitching_centers) =>
                    stitching_centers.id === action.payload.id ? action.payload : stitching_centers
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_STITCHING_CENTERS_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default stitching_centers_reducer;