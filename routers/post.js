import express from 'express';
import fs from 'fs';

//TODO: Написать роут для твиттов (напр. /post)
const postRouter = express.Router();
//Для чтения тела POST запроса
const urlencodedParser = express.urlencoded({extended: false});

//TODO: Написать запрос для получения всех твиттов (пока можно хранить ввиде JSON файла или JS объекта)
postRouter.get('/', (req, res) => {
    const jsondata = fs.readFileSync('./data/posts.json', 'utf-8');
    const posts = JSON.parse(jsondata);
    res.send(posts);
});

//TODO: Написать запрос для получения твитта по его ID
postRouter.get('/:id', (req, res) => {
    const jsondata = fs.readFileSync('./data/users.json', 'utf-8')
    const posts = JSON.parse(jsondata).filter(item => item.id == req.params.id)
    res.send(posts)
})

//TODO: Написать POST запрос для отправки твитта (пока никуда записывать его не надо, нужно просто вернуть отправвленные данные назад)
postRouter.post('/', urlencodedParser, (req, res) => {
    res.send(req.body)
})

export default postRouter
