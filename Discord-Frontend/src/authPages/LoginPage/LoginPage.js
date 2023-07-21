import React, { useEffect, useState } from 'react'
import AuthBox from '../../shared/components/AuthBox'
import LoginPageHeader from './LoginPageHeader'
import LoginPageInputs from './LoginPageInputs'
import LoginPageFooter from './LoginPageFooter';
import { validateLoginForm } from '../../shared/utils/validators';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/authActions';
import { useLocation } from 'react-router-dom';

const LoginPage = ({login}) => {
    const history=useLocation()
const [mail,setmail] = useState("");
const [password,setpassword] = useState("");

const [isFormValid,setisFormValid] = useState(false)



const handleLogin=()=>{
    const userDetails = {
        mail,
        password,
    }
login(userDetails,history)
}



useEffect(()=>{
    setisFormValid(validateLoginForm({mail,password}))
})


    return (
        <div>
           
            <AuthBox>
                <LoginPageHeader/>
                <LoginPageInputs 
                mail={mail}
                setmail={setmail}
                password={password}
                setpassword={setpassword}
                
                />
                <LoginPageFooter
                handleLogin={handleLogin}
                isFormValid={isFormValid}
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

export default connect(null,mapActionsToProps)(LoginPage)
