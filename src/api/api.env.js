const argv = require('minimist')(process.argv.slice(2));
const apiEnv = argv.api || 'alpha';
module.exports = JSON.stringify(apiEnv)
