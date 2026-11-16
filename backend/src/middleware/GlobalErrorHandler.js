const logger = require('../config/logger');
const GlobalError = require('../utils/GlobalError');

module.exports = (err, req, res, next) => {
const statusCode = err.statusCode || 500;
const message = err.isOperational ? err.message : 'Internal Server Error';

logger.error({err: err.message, path: req.path, method: req.method},'Request Error');
res.status(statusCode).json({sucess: false, message});
}