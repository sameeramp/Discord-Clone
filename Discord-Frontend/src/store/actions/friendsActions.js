import { openAlertMessage } from "./alertActions"
import * as api from "../../api"
export const friendsActions = {
    SET_FRIENDS: "FRIENDS.SET_FRIENDS",
    SET_PENDING_FRIENDS_INVITATIONS: "FRIENDS.SET_PENDING_FRIENDS_INVITATIONS",
    SET_ONLINE_USERS: "FRIENDS.SET_ONLINE_USERS"
}

export const getActions = (dispatch) => {

    return {
        sendFriendInvitation: (data, closeDialogHandler) =>
            dispatch(sendFriendInvitation(data, closeDialogHandler)),
            acceptFriendInvitation: (data) => dispatch(acceptFriendInvitation(data)),
        rejectFriendInvitation: (data) => dispatch(rejectFriendInvitation(data)),

    }
}


// friends:

// onlineUsers


// SET_FRIENDS
// SET_ONLINE_USERS

const sendFriendInvitation = (data, closeDialogHandler) => {
   

    return async (dispatch) => {
        const response = await api.sendFriendInvitation(data)

        if (response.error) {

            dispatch(openAlertMessage(response.exception?.response?.data));

        } else {
            dispatch(openAlertMessage(response?.data));
            closeDialogHandler()

        }
    }
}

export const setPendingFriendsInvitations = (pendingFriendsInvitations) => {
   
    return {
        type: friendsActions.SET_PENDING_FRIENDS_INVITATIONS,
        pendingFriendsInvitations,
    };
};



export const setFriends = (friends) => {
   

    return {
        type: friendsActions.SET_FRIENDS,
        friends,
    }

}

export const setOnlineUsers = (onlineUsers) => {
   
    return {
        type: friendsActions.SET_ONLINE_USERS,
        
        onlineUsers
    }
}

 const acceptFriendInvitation = (data) => {
    console.log(data,"invitation ")

    return async (dispatch) => {

        const response = await api.acceptFriendInvitation(data)

        if (response.error) {

            dispatch(openAlertMessage(response.exception?.response?.data));

        } else {
            dispatch(openAlertMessage("invitation accepted!"));


        }
    }

}

 const rejectFriendInvitation = (data) => {

    return async (dispatch) => {

        const response = await api.rejectFriendInvitation(data)

        if (response.error) {

            dispatch(openAlertMessage(response.exception?.response?.data));

        } else {
            dispatch(openAlertMessage("invitation rejected"));


        }
    }


}
