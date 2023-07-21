const FriendInvitation = require("../../models/friendInvitation");

const User = require("../../models/user")


const friendsUpdate = require('../../socketHandlers/updates/friends')

const postInvite = async (req, res) => {

    const { targetMailAddress } = req.body;

    const { userId, mail } = req.user;

    //check if the friend we would like to invite is not user

    if (mail.toLowerCase() === targetMailAddress.toLowerCase()) {

        return res.status(409)
            .send("Sorry . you cannot become friend with yourself")
    }

    const targetUser = await User.findOne({
        mail: targetMailAddress.toLowerCase()
    })


    if (!targetUser) {

        return res.status(404).send(`Friend of ${targetMailAddress} has not been found. Please check mail address`)

    }

    //check if the invitation has been already sent

    const invitationAlreadyReceived = await FriendInvitation.findOne({
        senderId: userId,
        receiverId: targetUser._id,
    });

    if (invitationAlreadyReceived) {
        return res.status(409).send('Invitation has been already send')
    }
    //check if the uset which we weould like to  invite is already our friend

    const usersAlreadyFriends = targetUser.friends.find(
        (friendId) => friendId.toString() === userId.toString()
    );
console.log(!usersAlreadyFriends,"alrdyyyyyyyyyyyy")
    if (usersAlreadyFriends) {
        return res.status(409).send('Friend already added. Please check friends list')
    }

    //create an invitation in database
    const newInvitation = await FriendInvitation.create({

        senderId: userId,
        receiverId: targetUser._id,

    })

    //if invitation has been successfully createed we would like to update friends invitations if the otherr user is onlone


    //send pending invitation update to specific user

    friendsUpdate.updateFriendsPendingInvitations(targetUser._id.toString());



     return res.status(201).send("invitation  has been sent ")

}

module.exports = postInvite
