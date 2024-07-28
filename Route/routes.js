import express from "express";
const route = express.Router();
import { User } from "../controller/user.js";
import { createPost } from "../controller/createPost.js";
import { deletePost } from "../controller/deletePost.js";
import { getPost } from "../controller/getPost.js";
import { updatePost } from "../controller/updatePost.js";

route.post("/user", User);

route.post("/post", createPost);
route.delete("/posts/:id", deletePost);
route.get("/posts/:id", getPost);
route.put("/posts/:id", updatePost);

export default route;
