const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Post, Comment, User } = require("../models");

router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { userId: req.session.userId },
      include: [User],
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    res.render("all-posts", { layout: "dashboard", posts });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
