require('dotenv').config();
const express = require('express');
const cors = require('cors');
const logger = require('./config/logger');
const pinohttp = require('pino-http');
const GlobalErrorHandler = require('./middleware/GlobalErrorHandler');
const GlobalError = require('./utils/GlobalError');

const app = express();

app.use(cors({origin: process.env.FRONTEND_URL}));
app.use(express.json());
app.use(pinohttp({ logger }));

app.get('/api/health',(req,res)=>{
    res.json({status:'OK'});
});

app.use((err, req, res, next) => {
    throw new GlobalError('Route is not Found',404);
});
app.use(GlobalErrorHandler);



module.exports = app;
