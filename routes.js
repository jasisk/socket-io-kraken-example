var path = require('path');

module.exports = function (router) {
  router.get('/', function (req, res) {
    var filePath = path.join(__dirname, 'public/template.html');
    res.sendFile(filePath);
  });
};
