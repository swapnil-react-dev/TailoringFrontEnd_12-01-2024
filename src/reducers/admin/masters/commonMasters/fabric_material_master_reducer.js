import {
    GET_FABRIC_MATERIAL_LIST_PROGRESS, GET_FABRIC_MATERIAL_LIST_SUCCESS, GET_FABRIC_MATERIAL_LIST_FAILURE,
    ADD_FABRIC_MATERIAL_PROGRESS, ADD_FABRIC_MATERIAL_SUCCESS, ADD_FABRIC_MATERIAL_FAILURE,
    EDIT_DELETE_FABRIC_MATERIAL_PROGRESS, EDIT_DELETE_FABRIC_MATERIAL_SUCCESS, EDIT_DELETE_FABRIC_MATERIAL_FAILURE,
    
    RESET_MESSAGE,

} from '../../../../types/actionTypes';

const initialState = {
    fabric_material: [],
    loginUser: null,
    error: false,
    loading: false,
    message: null
}

const fabric_material_master_reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_FABRIC_MATERIAL_LIST_SUCCESS:
            return { ...state, fabric_material: action.fabric_material, loading: false };
        case GET_FABRIC_MATERIAL_LIST_FAILURE:
            return { ...state, loading: false, error: true };
        case GET_FABRIC_MATERIAL_LIST_PROGRESS:
            return { ...state, loading: true, error: false };
        case ADD_FABRIC_MATERIAL_PROGRESS:
            return { ...state, loading: true };
        case ADD_FABRIC_MATERIAL_SUCCESS:
            return { ...state, fabric_material: [...state.fabric_material, action.payload], loading: false, error: false, message: action.payload.message };
        case ADD_FABRIC_MATERIAL_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };
        case EDIT_DELETE_FABRIC_MATERIAL_PROGRESS:
            return { ...state, loading: true };
        case EDIT_DELETE_FABRIC_MATERIAL_SUCCESS:
            return {
                ...state,
                fabric_material: state.fabric_material.map((fabric_material) =>
                    fabric_material.id === action.payload.id ? action.payload : fabric_material
                ),
                message: action.payload.message
            };
        case EDIT_DELETE_FABRIC_MATERIAL_FAILURE:
            return { ...state, loading: false, error: action.payload, message: action.payload.message };


        case RESET_MESSAGE:
            return { ...state, message: null }; // Reset the edit message

        default:
            return state
    }
}

export default fabric_material_master_reducer;