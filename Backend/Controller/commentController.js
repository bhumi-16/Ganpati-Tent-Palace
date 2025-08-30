const Comment = require("../Models/commentModel");

// Create a new review
exports.createComment = async (req, res) => {
  try {
    const { username, content } = req.body;
    const comment = new Comment({ username, content });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all reviews
exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find().sort({ createdAt: -1 });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single review by ID
exports.getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ message: "Review not found" });
    res.json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update review
exports.updateComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!comment) return res.status(404).json({ message: "Review not found" });
    res.json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete review
exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) return res.status(404).json({ message: "Review not found" });
    res.json({ message: "Review deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
