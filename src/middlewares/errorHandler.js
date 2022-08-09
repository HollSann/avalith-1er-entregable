const errorHandler = (_req, res, next) => {
    res.status(404).send(`Not found`);
    next();
};

export default errorHandler;