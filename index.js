import express from 'express';
import rootRouter from './routers/root.js'
import userRouter from './routers/users.js';
import postRouter from './routers/post.js';
import actualRouter from './routers/actual.js';
import searchRouter from './routers/search.js';

const app = express();
const port = '8000';

app.use('/', rootRouter);
app.use('/user', userRouter);
app.use('/post', postRouter);
app.use('/actual', actualRouter);
app.use('/search', searchRouter);


app.listen(port, () => {
    console.log(`xample app listening at http://localhost:${port}`)
})