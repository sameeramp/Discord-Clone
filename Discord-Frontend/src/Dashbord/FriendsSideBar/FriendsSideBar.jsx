import styled from '@emotion/styled'
import React from 'react'
import AddFriebdButton from './AddFriendButton'
import FriendsTitle from './FriendsTitle'
import FriendsList from './FriendsList/FriendsList'
import PendingInvitationsList from './PendingInvitationsList.js/PendingInvitationsList'

const MainContainer = styled("div")({
    width: "224px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#2F3136"
})

export const FriendsSideBar = () => {
    return (
        <MainContainer>
            <AddFriebdButton />
            <FriendsTitle title="private Messages" />
            <FriendsList />
            <FriendsTitle title="ivitations" />
            <PendingInvitationsList />

        </MainContainer>
    )
}

export default FriendsSideBar
