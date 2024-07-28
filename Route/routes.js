import express from "express";
const route = express.Router();
import { User } from "../controller/user.js";

route.post("/user", User);

export default route;
