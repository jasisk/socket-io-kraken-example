var path = require('path');

module.exports = function (router) {
  router.get('/', function (req, res) {
    var filePath = path.join(__dirname, 'template.html');
    res.sendFile(filePath);
  });
};
