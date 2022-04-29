const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Post, Comment, User } = require("../models");

router.get("/", (req, res) => {
  Post.findAll({
    include: [User],
  })
    .then((data) => {
      const posts = postData.map((post) => post.get({ plain: true }));

      res.render("all-posts", { posts });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/post/;id", async (req, res) => {
  try {
    const postData = await User.findOne({
      where: {
        email: req.body.id,
        include: [
          User,
          {
            model: Comment,
            include: [User],
          },
        ],
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
