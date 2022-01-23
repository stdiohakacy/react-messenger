const router = require('express').Router();
const Conversation = require('../models/Conversation');

// new conversation
router.post("/", async (req, res) => {
    const { senderId, receiverId } = req.body;
    const conversation = new Conversation({
        members: [senderId, receiverId],
    })

    try {
        const savedConversation = conversation.save();
        return res.status(200).json(savedConversation);
    } catch (error) {
        return res.status(500).json(error);
    }
})

// get conversation of user
router.get("/:userId", async (req, res) => {
    try {
        const conversation = await Conversation.find({
            members: { $in: [req.params.userId] },
        })

        return res.status(200).json(conversation)
    } catch (error) {
        return res.status(500).json(error)
    }
})

// get conv includes two userId
router.get("/find/:firstUserId/:secondUserId", async (req, res) => {
    try {
        const conversation = await Conversation.findOne({
            members: { $all: [req.params.firstUserId, req.params.secondUserId] },
        });
        res.status(200).json(conversation)
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;