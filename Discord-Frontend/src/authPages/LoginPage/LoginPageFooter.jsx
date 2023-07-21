import React, { useEffect } from 'react'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton'
import RedierectInfo from '../../shared/components/RedierectInfo'
import { useNavigate } from 'react-router-dom'
import Register from '../RegisterPage/RegisterPage'
import { Tooltip } from '@mui/material'

const getFormNotValidMessage = ()=>{
    return 'Enter correct email and password should contain between 6 and 12 digits'
}
const getFormValidMessage = ()=>{
    return 'press enter to login'
} 


function LoginPageFooter({handleLogin,isFormValid}) {

    const navigate=useNavigate()

    const handlePushToRegisterPage=()=>{
      
     
   
     navigate("/register")

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
            label="Log in"
            disabled={!isFormValid}
            onClick={handleLogin}


            />
        </div>
        </Tooltip>
        <RedierectInfo 
        text="Need an account?"
        redirectText={"create an account"}
        additionalStyles={{marginTop: '5px'}}
        redirectHandler={handlePushToRegisterPage}

         />
        </>
       
    )
}

export default LoginPageFooter
