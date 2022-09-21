// Initializes the `request` service on path `/request`
const { Request } = require('./request.class');
const createModel = require('../../models/request.model');
const hooks = require('./request.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/request', new Request(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('request');

  service.hooks(hooks);
};
