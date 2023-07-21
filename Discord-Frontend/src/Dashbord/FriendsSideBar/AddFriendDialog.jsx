import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { validateMail } from "../../shared/utils/validators"
import InputWithLabel from '../../shared/components/InputWithLabel';
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton';
import { getActions } from '../../store/actions/friendsActions';
import { connect } from 'react-redux';


const AddFriendDialog = ({
    isDialogOpen,
    closeDialogHandler,
    sendFriendInvitation = () => { }
}) => {

    const [mail, setMail] = useState("");
    const [isFormValid, setIsFormValid] = useState("")
    const handleSendInvitation = () => {
        //send friend rqst to server

        sendFriendInvitation({
            targetMailAddress: mail,
        },handlecloseDialog)
    }

    const handlecloseDialog = () => {
        closeDialogHandler()
        setMail("")
    }

    useEffect(() => {
        setIsFormValid(validateMail(mail))
    }, [mail, setIsFormValid])

    return (
        <Dialog
            open={isDialogOpen}
            onClose={handlecloseDialog}
        >
            <DialogTitle>
                <Typography>Invite a Friend</Typography>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Typography>Enter e-mail address of friend which you would like to invite</Typography>
                </DialogContentText>
                <InputWithLabel
                    label="Mail"
                    type="text"
                    value={mail}
                    setValue={setMail}
                    placeholder="Enter email address"
                />

            </DialogContent>
            <DialogActions>
                <CustomPrimaryButton 
onClick={handleSendInvitation}
disabled={!isFormValid}
label="Send"
additionalStyles={{
    marginLeft:"15px",
    marginRight: "15px",
    marginBottom: "10px"
}}
                />
            </DialogActions>

        </Dialog>
    )
}

const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch)
    }
}

export default connect(null, mapActionsToProps)( AddFriendDialog)
