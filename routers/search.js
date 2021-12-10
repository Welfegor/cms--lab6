import express from 'express';
import fs from 'fs';

//TODO: Роут для поиска
const searchRouter = express.Router();
//Для чтения тела POST запроса
const urlencodedParser = express.urlencoded({extended: false});

//TODO: Написать запрос на поиск среди твиттов (просто по совпадению куска текста)
searchRouter.post('/', urlencodedParser, (req, res) => {
    const jsondata = fs.readFileSync('./data/posts.json', 'utf-8')
    const posts = JSON.parse(jsondata).filter(item => item.text.includes(req.body))
    res.send(posts)
})


export default searchRouter
