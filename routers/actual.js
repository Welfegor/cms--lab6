import express from 'express';
import fs from 'fs';

//TODO: Роут для актуального
const actualRouter = express.Router();

//TODO: Написать запрос на получение списка актуального
actualRouter.get('/', (req, res) => {
    const jsondata = fs.readFileSync('./data/actual.json', 'utf-8');
    const actual = JSON.parse(jsondata);
    res.send(actual);
});



export default actualRouter