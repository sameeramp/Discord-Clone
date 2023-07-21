const FriendInvitation = require("../../models/friendInvitation");
const user = require("../../models/user");


const friendsUpdate = require("../../socketHandlers/updates/friends")




const postAccept = async (req, res) => {


    try {
        const { id } = req.body;
        const invitation = await FriendInvitation.findById(id)

        if (!invitation) {
            return res.status(401).send("Error occured please try again")

        }

        const { senderId, receiverId } = invitation;

        //add friends to both users
        const senderUser = await user.findById(senderId)
        senderUser.friends = [...senderUser.friends, receiverId];

        const receiverUser = await user.findById(receiverId);
        receiverUser.friends = [...receiverUser.friends, senderId]

        await senderUser.save();
        await receiverUser.save()

        //delete inviattaion

        await FriendInvitation.findByIdAndDelete(id)

        //update list of the friends if the users are online
        friendsUpdate.updateFriends(senderId.toString())
        friendsUpdate.updateFriends(receiverId.toString())

        //update the list of  friends pending  invitations

        friendsUpdate.updateFriendsPendingInvitations(receiverId.toString())

        return res.status(200).send('friend successfully addedd')

    }
    catch (err) {
        console.log(err)
        return res.status(500).send("something went wrong.please try again")
    }

}

module.exports = postAccept;