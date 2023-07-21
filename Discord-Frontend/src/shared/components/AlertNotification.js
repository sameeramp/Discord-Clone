import { Alert, Snackbar } from '@mui/material'
import React from 'react'
import { getActions } from '../../store/actions/alertActions'
import {connect} from "react-redux"
import store from '../../store/store'

const AlertNotification = ({
    showAlertMessage,
    closeAlertMessage,
    alertMessageContent,
    
}) => {
    return (
       
          <Snackbar
        anchorOrigin={{ vertical: "bottom" , horizontal: "center" }}
        open={showAlertMessage}
        onClose={closeAlertMessage}
        autoHideDuration={6000}
       
       
        >
           <Alert severity='info'>
        {alertMessageContent}
           </Alert>


            
        </Snackbar>



       
      
       


       
        
       
    )
}

const mapStoreStateToProps = ({ alert }) => {
    console.log(alert,"alertyy")
    return {
        ...alert,
    }
}

const mapActionsToProps = ( dispatch ) => {

    return {
        ...getActions(dispatch)
    };
};

export default connect(mapStoreStateToProps , mapActionsToProps)(AlertNotification)
