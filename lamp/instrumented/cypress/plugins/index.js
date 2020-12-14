function cov_1x0lviwd3z() {
  var path = "C:\\xampp\\htdocs\\fakeID\\lamp\\cypress\\plugins\\index.js";
  var hash = "54660770c998d6bfa4523f641d16d5ba6cf74a67";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\xampp\\htdocs\\fakeID\\lamp\\cypress\\plugins\\index.js",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 0
        },
        end: {
          line: 27,
          column: 2
        }
      },
      "1": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 20,
          column: 53
        }
      },
      "2": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 26,
          column: 16
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 19,
            column: 17
          },
          end: {
            line: 19,
            column: 18
          }
        },
        loc: {
          start: {
            line: 19,
            column: 33
          },
          end: {
            line: 27,
            column: 1
          }
        },
        line: 19
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "54660770c998d6bfa4523f641d16d5ba6cf74a67"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1x0lviwd3z = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1x0lviwd3z();
cov_1x0lviwd3z().s[0]++;

/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on, config) => {
  cov_1x0lviwd3z().f[0]++;
  cov_1x0lviwd3z().s[1]++;

  require("@cypress/code-coverage/task")(on, config); // include any other plugin code...
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  // It's IMPORTANT to return the config object
  // with any changed environment variables


  cov_1x0lviwd3z().s[2]++;
  return config;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJvbiIsImNvbmZpZyIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7O0FBZlo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsQ0FBQ0MsRUFBRCxFQUFLQyxNQUFMLEtBQWdCO0FBQUE7QUFBQTs7QUFDL0JDLEVBQUFBLE9BQU8sQ0FBQyw2QkFBRCxDQUFQLENBQXVDRixFQUF2QyxFQUEyQ0MsTUFBM0MsRUFEK0IsQ0FFL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTitCO0FBTy9CLFNBQU9BLE1BQVA7QUFDRCxDQVJEIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJjeXByZXNzXCIgLz5cclxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLy8gVGhpcyBleGFtcGxlIHBsdWdpbnMvaW5kZXguanMgY2FuIGJlIHVzZWQgdG8gbG9hZCBwbHVnaW5zXHJcbi8vXHJcbi8vIFlvdSBjYW4gY2hhbmdlIHRoZSBsb2NhdGlvbiBvZiB0aGlzIGZpbGUgb3IgdHVybiBvZmYgbG9hZGluZ1xyXG4vLyB0aGUgcGx1Z2lucyBmaWxlIHdpdGggdGhlICdwbHVnaW5zRmlsZScgY29uZmlndXJhdGlvbiBvcHRpb24uXHJcbi8vXHJcbi8vIFlvdSBjYW4gcmVhZCBtb3JlIGhlcmU6XHJcbi8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9wbHVnaW5zLWd1aWRlXHJcbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcblxyXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIGEgcHJvamVjdCBpcyBvcGVuZWQgb3IgcmUtb3BlbmVkIChlLmcuIGR1ZSB0b1xyXG4vLyB0aGUgcHJvamVjdCdzIGNvbmZpZyBjaGFuZ2luZylcclxuXHJcbi8qKlxyXG4gKiBAdHlwZSB7Q3lwcmVzcy5QbHVnaW5Db25maWd9XHJcbiAqL1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSAob24sIGNvbmZpZykgPT4ge1xyXG4gIHJlcXVpcmUoXCJAY3lwcmVzcy9jb2RlLWNvdmVyYWdlL3Rhc2tcIikob24sIGNvbmZpZyk7XHJcbiAgLy8gaW5jbHVkZSBhbnkgb3RoZXIgcGx1Z2luIGNvZGUuLi5cclxuICAvLyBgb25gIGlzIHVzZWQgdG8gaG9vayBpbnRvIHZhcmlvdXMgZXZlbnRzIEN5cHJlc3MgZW1pdHNcclxuICAvLyBgY29uZmlnYCBpcyB0aGUgcmVzb2x2ZWQgQ3lwcmVzcyBjb25maWdcclxuICAvLyBJdCdzIElNUE9SVEFOVCB0byByZXR1cm4gdGhlIGNvbmZpZyBvYmplY3RcclxuICAvLyB3aXRoIGFueSBjaGFuZ2VkIGVudmlyb25tZW50IHZhcmlhYmxlc1xyXG4gIHJldHVybiBjb25maWc7XHJcbn07XHJcbiJdfQ==