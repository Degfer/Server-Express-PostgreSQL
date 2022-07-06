import express from 'express';
import postController from '../controller/post.controller'; 

const router = express.Router();

router.post('/post', postController.createPost);
router.get('/post', postController.getPostsByUser);


export default router;