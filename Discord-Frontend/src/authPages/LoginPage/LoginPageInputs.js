import React from 'react'
import InputWithLabel from '../../shared/components/InputWithLabel'

function LoginPageInputs({mail,setmail,password,setpassword}) {
    return (
        <>
        <InputWithLabel 
        value={mail}
        setValue={setmail}
        label="E-mail"
        type="text"
        placeholder="Enter email address"

        

        />

<InputWithLabel 
        value={password}
        setValue={setpassword}
        label="Password"
        type="text"
        placeholder="Enter password"

        

        />

        </>
    )
}

export default LoginPageInputs
