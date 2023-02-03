import express from 'express'
const router = express.Router();

import  { sendPasswordLink, verifyPasswordReset, setNewPassword } from '../controllers/passwordReset.js'


// send password link
router.post("/", sendPasswordLink )

// verify password reset link
router.get("/:id/:token", verifyPasswordReset )

//  set new password
router.post("/:id/:token", setNewPassword )

export default router
