import { Box, IconButton,  } from '@mui/material'
import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';

function InvitationDecisionButtons({ disabled, acceptInvitationHandler, rejectInvitationHandler }) {
    return (
        <Box sx={{ display: "flex" }} >
            <IconButton

                style={{ color: "white" }}
                disabled={disabled}
                onClick={acceptInvitationHandler}
            >
                <CheckIcon />


            </IconButton>


            <IconButton

                style={{ color: "white" }}
                disabled={disabled}
                onClick={rejectInvitationHandler}
            >
                <ClearIcon />


            </IconButton>

        </Box>
    )
}

export default InvitationDecisionButtons
