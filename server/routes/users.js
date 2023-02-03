import express from 'express'
const router = express.Router();

import {createUser , verifyAccount} from '../controllers/user.js'

router.post("/", createUser)
router.get("/:id/verify/:token/", verifyAccount)

export default router