import express from 'express';
import cors from 'cors'
import dotEnv from 'dotenv'
import bodyParser from 'body-parser'

import routerContato from './routes/routeContacto.js';


dotEnv.config();
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

const port = process.env.PORT  || 5000

app.use('/contato',routerContato);

app.listen(port, ()=>{
     console.log(`rodouu ${port} `)
});