import styled from '@emotion/styled'
import React from 'react'
import FriendsListItems from './FriendsListItems'
import { connect } from "react-redux"

const MainContainer = styled("div")({
    flexGrow: 1,
    width: "100%"
})


const checkOnlineUsers = (friends = [], onlineUsers = []) => {
    friends.forEach(f => {
        const isUserOnline = onlineUsers.find(user => user.userId === f.id)
        f.isOnline = isUserOnline ? true : false;


    })

    return friends;
}

function FriendsList({ friends, onlineUsers }) {
    console.log(friends,"frndslist")
    return (
        <MainContainer>
            {checkOnlineUsers(friends, onlineUsers).map((f) => (
                <FriendsListItems
                    username={f.username}
                    id={f.id}
                    isOnline={f.isOnline}
                    key={f.id}

                />


            ))}
        </MainContainer>
    )
}

const mapStoreStatetoProps = ({ friends }) => {
   
    return {
        ...friends
    }

}

export default connect(mapStoreStatetoProps)(FriendsList
)