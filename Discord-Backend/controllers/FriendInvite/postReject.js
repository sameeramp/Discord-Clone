const FriendInvitation = require("../../models/friendInvitation")
const friendsUpdates = require("../../socketHandlers/updates/friends")
const postReject = async (req,res) => {

    try {
  const { id } = req.body;
  const { userId } = req.user;

//remove invitation from friend invitation collection

const invitationExists = await FriendInvitation.exists({_id: id})

if( invitationExists ) {
    await FriendInvitation.findByIdAndDelete( id )
}
//update pending invitations 

friendsUpdates.updateFriendsPendingInvitations(userId)

return res.status(200).send("invitation successfully rejected")
    }
    catch (err) {
        console.log(err)
        return res.status(500).send("something went wrong please try again")
    }

}

module.exports = postReject;