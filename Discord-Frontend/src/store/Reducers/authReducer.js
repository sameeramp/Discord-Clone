import { red } from "@mui/material/colors";
import { authActions } from "../actions/authActions"

const initState = {
    useDetails: null,

}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case authActions.SET_USER_DETAILS:
            return {
                ...state,
                useDetails: action.useDetails,
            };
            default :
            return state;

    }
}

export default reducer