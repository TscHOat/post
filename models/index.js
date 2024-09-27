import { Sequelize } from "sequelize";
import Post from "./post.js";
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database/database.sqlite",
});

const PostModel = Post(sequelize);
sequelize.sync();

export { PostModel, sequelize };
