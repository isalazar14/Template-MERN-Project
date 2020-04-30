const controller = require('../component1/component1.controller');
const path = require('path');

module.exports = app => {
  app.get('/api/things', controller.getAllThings);
  app.post('/api/things', controller.createThing);
  app.get('/api/things/:id', controller.getThing);
  app.put('/api/things/:id', controller.editThing);
  app.delete('/api/things/:id', controller.deleteThing);
  app.all("*", (req, res, next) => {
    // res.send("In backend server");
    // const indexPath = 
    res.sendFile(path.resolve('public/index.html'));

    /* to serve frontend client, uncomment the following section, and modify as needed */

    // console.log("in backend server");
    // const clientPath = path.resolve('../client/public')
    // console.log("client path:", clientPath);
    // res.sendFile(clientPath + '/index.html');
  });
}