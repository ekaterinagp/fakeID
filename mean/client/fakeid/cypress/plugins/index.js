// module.exports = (on, config) => {
//   require("@cypress/code-coverage/task")(on, config);
//   // IMPORTANT to return the config object
//   // with the any changed environment variables
//   return config;
// };

/**
 * @type {Cypress.PluginConfig}
 */
const cypressTypeScriptPreprocessor = require("./cy-ts-preprocessor");
const registerCodeCoverageTasks = require("@cypress/code-coverage/task");

module.exports = (on, config) => {
  on("file:preprocessor", cypressTypeScriptPreprocessor);

  // enable code coverage collection
  return registerCodeCoverageTasks(on, config);
};
