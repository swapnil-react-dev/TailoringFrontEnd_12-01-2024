import {
    GET_FABRIC_QUALITY_LIST_PROGRESS, GET_FABRIC_QUALITY_LIST_SUCCESS, GET_FABRIC_QUALITY_LIST_FAILURE,
    ADD_FABRIC_QUALITY_PROGRESS, ADD_FABRIC_QUALITY_SUCCESS, ADD_FABRIC_QUALITY_FAILURE,
    EDIT_DELETE_FABRIC_QUALITY_PROGRESS, EDIT_DELETE_FABRIC_QUALITY_SUCCESS, EDIT_DELETE_FABRIC_QUALITY_FAILURE,

    RESET_MESSAGE,

} from '../../../../types/actionTypes';

const initialState = {
    fabric_quality: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const fabric_quality_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_FABRIC_QUALITY_LIST_SUCCESS:
            return { ...state, fabric_quality: action.fabric_quality, loading: false };
        case GET_FABRIC_QUALITY_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_FABRIC_QUALITY_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_FABRIC_QUALITY_PROGRESS:
            return { ...state, loading: true };
        case ADD_FABRIC_QUALITY_SUCCESS:
            return { ...state, fabric_quality: [...state.fabric_quality, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_FABRIC_QUALITY_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_FABRIC_QUALITY_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_FABRIC_QUALITY_SUCCESS:
            return {
                ...state,
                fabric_quality: state.fabric_quality.map((fabric_quality) =>
                    fabric_quality.id === action.payload.id ? action.payload : fabric_quality
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_FABRIC_QUALITY_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default fabric_quality_master_reducer;