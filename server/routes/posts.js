import express from 'express';

const router = express.Router();

router.get('/', (res, req) => {
    res.setEncoding('This works!');
});

export default router;