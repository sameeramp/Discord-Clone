import React from 'react'
import {Box, styled} from '@mui/material'
const BoxWrapper = styled('div')({
    width: '100%',
    height: 980,
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    background: '#5865F2'
})

function AuthBox(props) {
    return (
       <BoxWrapper>
<Box 
sx={{
    width: 700,
    height: 400,
    bgcolor: '#36393f',
    borderRadius: '5px',
    boxShadow: '0 2px 10px 0 rgb(0 0 0  / 20%)',
    display: 'flex',
    flexDirection: 'column',
    padding: '25px',
}}
>
    {props.children}
</Box>
       </BoxWrapper>
    )
}

export default AuthBox
