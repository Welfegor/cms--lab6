import express from 'express';
import fs from 'fs';

const userRouter = express.Router();

//TODO: Написать запрос на получение всех пользователей
userRouter.get('/', (req, res) => {
    const jsondata = fs.readFileSync('./data/users.json', 'utf-8');
    const users = JSON.parse(jsondata);
    res.send(users);
});

//TODO: Возращать данные из какого-нибудь статичного JSON файла или простого JS объекта по ID пользователя и выводить на экран его никнейм.
userRouter.get('/:id', (req, res) => {
    const jsondata = fs.readFileSync('./data/users.json', 'utf-8')
    const users = JSON.parse(jsondata).filter(item => item.id == req.params.id)
    res.send('User name = ' + users[0].name)
})


export default userRouter