const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Traveller model
class Post extends Model {}

// create fields/columns for Traveller model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_title: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    post_content: {
      type: DataTypes.STRING(),
      allowNull: false,
      unique: true,
    },
    date_created: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "traveller",
  }
);

module.exports = Post;
