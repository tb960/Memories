import express from 'express';

import { getPosts, createPosts } from '../controllers/posts.js';

const router = express.Router();

router.get('/getPosts', getPosts);
router.post('/createPosts', createPosts);

export default router;