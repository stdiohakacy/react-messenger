const router = require('express').Router();
const Message = require('../models/Message');

router.post('/', async(req, res) => {
    const message = new Message(req.body);
    try {
        const messageSaved = await message.save();
        return res.status(200).json(messageSaved);
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get("/:conversationId", async (req, res) => {
    try {
        const messages = await Message.find({
            conversationId: req.params.conversationId,
        })
        return res.status(200).json(messages);
    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = router;