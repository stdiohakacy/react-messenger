const router = require('express').Router();
const Post = require('../models/Post');

// create post
router.post('/', async (req, res) => {
    const post = new Post(req.body);
    try {
        const savePost = await post.save();
        return res.status(200).json(savePost)
    } catch (error) {
        return res.status(500).json(error);
    }
})

// update post
router.put(":/id", async(req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body });
            return res.json({ message: `The post ${id} has been updated!` })
        }
    } catch (error) {
        return res.status(500).json(error);
    }
})

// delete post
router.delete(":/id", async (req, res) => {
    try {
        const post = Post.findById(req.params.id);
        if(post.userId === req.body.userId) {
            await post.deleteOne();
            return res.status(500).json({ message: `The post ${id} has been deleted!` });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
})

// like or unlike post
router.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json({ message: `The post ${id} has been liked!` });
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json({ message: `The post ${id} has been disliked` });
        }
    } catch (error) {
        return res.status(500).json(error);
    }
})

// get a post
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
})

//get timeline posts
router.get("/timeline/:userId", async (req, res) => {
    try {
        const currentUser = await User.findById(req.params.userId);
        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
            currentUser.followings.map(friendId => Post.find({ userId: friendId }))
        );
        res.status(200).json(userPosts.concat(...friendPosts));
    } catch (err) {
        res.status(500).json(err);
    }
});

//get user's all posts
router.get("/profile/:username", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.params.username });
        const posts = await Post.find({ userId: user._id });
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;