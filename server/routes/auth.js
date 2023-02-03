import express from 'express'
const router = express.Router();

import authentication from '../controllers/auth.js'

router.post("/", authentication)



export default authentication;
