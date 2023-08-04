import express from "express";
const router = express.Router();

import { deleteUser, getAllUsers, getUserDetails, register, specialFunc, updateUser } from "../controllers/user.js";
router.get("/all", getAllUsers)

router.post("/new", register)

router.get("/userid/special", specialFunc)

router
    .route("/userid/:id")
    .get(getUserDetails)
    .put(updateUser)
    .delete(deleteUser);

// router.get("/userid/:id", getUserDetails)

// router.put("/userid/:id", updateUser)

// router.delete("/userid/:id", deleteUser)

export default router;