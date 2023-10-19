require('dotenv').config();

import express from 'express';
import router from './routes/index';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
const port = 3000;

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use('/api', router);

app.listen(port, () => 
    console.log(`Example app listening on port ${port}!`
));
