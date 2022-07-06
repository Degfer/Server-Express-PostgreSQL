import { Request, Response } from "express";
import db from "../db";

class PostController {
    async createPost(req: Request, res: Response) {
        const {title, content, user_id} = req.body
        const newPost = await db.query(`INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *`, [title, content, user_id])
        res.json(newPost.rows[0])
    }

    async getPostsByUser(req: Request, res: Response) {
        const id = req.query.id 
        const posts = await db.query(`SELECT * FROM post where user_id = $1`, [id])
        res.json(posts.rows)
    }
}

export default new PostController