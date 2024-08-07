
import { styled } from '@mui/material/styles';
import { Autocomplete, TextField } from '@mui/material';
export const TLRinput = styled(TextField)(() => ({
    "& .MuiInputBase-root": {
        height: 25,
        fontSize: 12,
    },
}));

export const TLRAutocomplete = styled(Autocomplete)(() => ({
    "& .MuiInputBase-root": {
        height: 25,
        fontSize: 12,
    },
}));

export const TLRinputNo = styled(TextField)(() => ({
    "& .MuiInputBase-root": {
        height: 25,
        "& input": {
            textAlign: "right",
            fontSize: '12px',
        }
    },
    '& input[type=number]': {
        '-moz-appearance': 'textfield'
    },
    '& input[type=number]::-webkit-outer-spin-button': {
        '-webkit-appearance': 'none',
    },
    '& input[type=number]::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
    }
}));