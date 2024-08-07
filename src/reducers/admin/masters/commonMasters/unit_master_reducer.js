import {
    GET_UNIT_LIST_PROGRESS, GET_UNIT_LIST_SUCCESS, GET_UNIT_LIST_FAILURE,
    ADD_UNIT_PROGRESS, ADD_UNIT_SUCCESS, ADD_UNIT_FAILURE,
    EDIT_DELETE_UNIT_PROGRESS, EDIT_DELETE_UNIT_SUCCESS, EDIT_DELETE_UNIT_FAILURE,

    RESET_MESSAGE,

} from '../../../../types/actionTypes';

const initialState = {
    unit: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const unit_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_UNIT_LIST_SUCCESS:
            return { ...state, user: action.unit, loading: false };
        case GET_UNIT_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_UNIT_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_UNIT_PROGRESS:
            return { ...state, loading: true };
        case ADD_UNIT_SUCCESS:
            return { ...state, unit: [...state.unit, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_UNIT_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_UNIT_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_UNIT_SUCCESS:
            return {
                ...state,
                unit: state.unit.map((unit) =>
                    unit.id === action.payload.id ? action.payload : unit
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_UNIT_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default unit_master_reducer;