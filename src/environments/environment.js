if(process.env.NODE_ENV === 'production') {
  module.exports = require('./environment.prod');
} else if(process.env.NODE_ENV === 'development') {
  module.exports = require('./environment.dev');
} else {
  module.exports = require('./environment.test');
}
