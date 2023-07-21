const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth")
const friendInvitationControllers = require("../controllers/FriendInvite/friendInvitationControllers")

const Joi = require("joi")
const validator = require("express-joi-validation").createValidator({})

const postFriendInvitationSchema = Joi.object({
    targetMailAddress: Joi.string().email(),

});
const inviteDecisionSchema = Joi.object({
    id: Joi.string().required(),

});

// rejectDecisionSchema

router.post('/invite',auth,validator.body(postFriendInvitationSchema),friendInvitationControllers.controllers.postInvite )
router.post('/accept',auth,validator.body(inviteDecisionSchema),friendInvitationControllers.controllers.postAccept )
router.post('/reject',auth,validator.body(inviteDecisionSchema),friendInvitationControllers.controllers.postReject )

module.exports = router