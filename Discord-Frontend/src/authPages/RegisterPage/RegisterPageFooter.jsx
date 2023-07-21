

import React, { useEffect } from 'react'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton'
import RedierectInfo from '../../shared/components/RedierectInfo'
import { useNavigate } from 'react-router-dom'
import Register from './RegisterPage'
import { Tooltip } from '@mui/material'

const getFormNotValidMessage = ()=>{
    return 'username should contain between 3 and 12 digits and password should contain between 6 and 12 digits Alse correct e-mail address should provided'
}
const getFormValidMessage = ()=>{
    return 'press enter to register'
} 


function RegisterPageFooter({handleRegister,isFormValid}) {

    const navigate=useNavigate()

    const handlePushToLoginPage=()=>{
      
     
   
     navigate("/login")

    }



    return (
        <>
        <Tooltip
        title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
        >
         <div>
            <CustomPrimaryButton
            additionalStyles={{
                marginTop:'30px'
                }}
            label="Register"
            disabled={!isFormValid}
            onClick={handleRegister}


            />
        </div>
        </Tooltip>
        <RedierectInfo 
        text=""
        redirectText={"Already have an account ? "}
        additionalStyles={{marginTop: '5px'}}
        redirectHandler={handlePushToLoginPage}

         />
        </>
       
    )
}

export default RegisterPageFooter
