import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import React from 'react'

const RedirectText = styled('span')({
    color: "#00AFF4",
    fontWeight: 500,
    cursor: "pointer",
})

function RedierectInfo({
    text,
    redirectText,
    additionalStyles,
redirectHandler
}) {
    return (
        <Typography
        sx={{color:'#72766d'}}
        style={additionalStyles ? additionalStyles :{}}
        variant='subtitle2'

        >
            {text}
            <RedirectText onClick={redirectHandler}>
                {redirectText}
            </RedirectText>

        </Typography>
    )
}

export default RedierectInfo
