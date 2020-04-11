const controller = require('../Controllers/controller');
const path = require('path');

module.exports = app => {
  app.get('/api/things', controller.getAllThings);
  app.get('/api/things/:id', controller.getThing);
  app.post('/api/things', controller.createThing);
  app.put('/api/things/:id', controller.editThing);
  app.delete('/api/things/:id', controller.deleteThing);
  app.all("*", (req, res, next) => {
    // res.sendFile(path.resolve('client/public/index.html'));
    res.send("In backend server");
  });
}