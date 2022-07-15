const animalRouter = require('./animal');

module.exports = (app) => {
  app.use(animalRouter);
  // add new route here
};
