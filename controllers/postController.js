const Post = require("../models/Post");

// CREATE POST
exports.createPost = async (req, res) => {
    try {
        const post = await Post.create(req.body);
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// GET ALL POSTS + SEARCH
exports.getPosts = async (req, res) => {
    try {
        const { term } = req.query;

        let query = {};

        if (term) {
            query = {
                $or: [
                    { title: { $regex: term, $options: "i" } },
                    { content: { $regex: term, $options: "i" } },
                    { category: { $regex: term, $options: "i" } }
                ]
            };
        }

        const posts = await Post.find(query);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET SINGLE POST
exports.getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) return res.status(404).json({ message: "Post not found" });

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE POST
exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!post) return res.status(404).json({ message: "Post not found" });

        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE POST
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);

        if (!post) return res.status(404).json({ message: "Post not found" });

        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
