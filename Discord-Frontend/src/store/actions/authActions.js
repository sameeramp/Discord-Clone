import { Navigate, useNavigate } from "react-router-dom";
import * as api from "../../api"
import { openAlertMessage } from "./alertActions";


export const authActions = {
    SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",

}

export const getActions = (dispatch) =>{
    return {
        login: (userDetails,history) => dispatch(login(userDetails, history)),
        register: (userDetails, history) => 
        dispatch(register(userDetails, history)),

        setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails))

    };
};

 const setUserDetails = (userDetails) => {
return {
    type: authActions.SET_USER_DETAILS,
    userDetails,
};
};


  const login = (userDetails,history) => {

   

    return async (dispatch) => {
        const response = await api.login(userDetails)
        console.log(response,"login")
        if (response.error) {
            //show error meaasaage
            dispatch(openAlertMessage(response?.exception?.response?.data));
          
        }else{
            const { userDetails } = response?.data;
            localStorage.setItem("user", JSON.stringify(userDetails))

            dispatch(setUserDetails(userDetails))
            
        }
    }
}


 const register = ( userDetails , history) => {
   
    return async (dispatch) => {
        const response = await api.register(userDetails)
      
        if (response.error) {
            //show error meaasaage
            dispatch(openAlertMessage(response?.exception?.response?.data));
        }else{
            const { userDetails } = response?.data;
            localStorage.setItem("user", JSON.stringify(userDetails))

            dispatch(setUserDetails(userDetails))

           
        }
    }
}