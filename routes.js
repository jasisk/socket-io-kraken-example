var path = require('path');

module.exports = function (router) {
  var viewCount = 0;
  router.get('/', function (req, res) {
    var io = req.app.kraken.get('io');
    var filePath = path.join(__dirname, 'public/template.html');
    res.sendFile(filePath);
  });
};
