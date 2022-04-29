const { Comment } = require("../../models");
const router = require("express").Router();
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const comment = await Comment.findAll({
      include: [User],
    });

    const commentd = comment.map((commentsd) => commentsd.get({ plain: true }));

    res.render("single-post", {
      comment,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
