import React, { memo, useEffect, useState } from 'react'
import AuthBox from '../../shared/components/AuthBox'
import { Typography } from '@mui/material'
import RegisterPageInput from './RegisterPageInput';
import RegisterPageFooter from './RegisterPageFooter';
import { validateRegisterForm } from '../../shared/utils/validators';
import { getActions } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';


function RegisterPage({register}) {

    const[mail, setMail] = useState("");
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const [isFormvalid, setIsFormValid] = useState(false)

    const history=useLocation()

    const handleRegister = ()=>{
        console.log(mail,username,password)

        const userDetails = {
            mail,
            password,
            username
        }

        register(userDetails,history)
    }

    useEffect(()=>{
        setIsFormValid(
            validateRegisterForm({
                mail,
                username,
                password
            })
        )
    },[mail,username,password,setIsFormValid])

    return (
    <div>
        <AuthBox>
       <Typography variant='5' sx={{ color: "white" }}>
        Create an account
       </Typography>
       <RegisterPageInput
       mail={mail}
       setMail={setMail}
       username={username}
       setUsername={setUsername}
       password={password}
       setPassword={setPassword}
       />
       <RegisterPageFooter
       handleRegister={handleRegister}
       isFormValid={isFormvalid}
       />
        </AuthBox>
       
    </div>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    }
}

export default connect(null,mapActionsToProps)(RegisterPage)



