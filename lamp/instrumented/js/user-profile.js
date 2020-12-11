"use strict";

function cov_p5xabs67k() {
  var path = "C:\\xampp\\htdocs\\fakeID\\lamp\\js\\user-profile.js";
  var hash = "a4e4bfb2255ad7391f25bdb67a3bfe2946b91175";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\xampp\\htdocs\\fakeID\\lamp\\js\\user-profile.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 6,
          column: 3
        }
      },
      "1": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 5,
          column: 9
        }
      },
      "2": {
        start: {
          line: 8,
          column: 16
        },
        end: {
          line: 8,
          column: 59
        }
      },
      "3": {
        start: {
          line: 10,
          column: 9
        },
        end: {
          line: 10,
          column: 28
        }
      },
      "4": {
        start: {
          line: 17,
          column: 13
        },
        end: {
          line: 17,
          column: 34
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 32
          },
          end: {
            line: 4,
            column: 33
          }
        },
        loc: {
          start: {
            line: 4,
            column: 38
          },
          end: {
            line: 6,
            column: 1
          }
        },
        line: 4
      },
      "1": {
        name: "init",
        decl: {
          start: {
            line: 16,
            column: 15
          },
          end: {
            line: 16,
            column: 19
          }
        },
        loc: {
          start: {
            line: 16,
            column: 22
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 16
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a4e4bfb2255ad7391f25bdb67a3bfe2946b91175"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_p5xabs67k = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_p5xabs67k();
cov_p5xabs67k().s[0]++;
window.addEventListener("load", () => {
  cov_p5xabs67k().f[0]++;
  cov_p5xabs67k().s[1]++;
  init();
});
let urlParams = (cov_p5xabs67k().s[2]++, new URLSearchParams(window.location.search));
let id = (cov_p5xabs67k().s[3]++, urlParams.get("id")); // console.log(id);

async function init() {
  cov_p5xabs67k().f[1]++;
  let user = (cov_p5xabs67k().s[4]++, await getUserById(id)); // console.log(user);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdCIsInVybFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImxvY2F0aW9uIiwic2VhcmNoIiwiaWQiLCJnZXQiLCJ1c2VyIiwiZ2V0VXNlckJ5SWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7OztBQVpaQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLE1BQU07QUFBQTtBQUFBO0FBQ3BDQyxFQUFBQSxJQUFJO0FBQ0wsQ0FGRDtBQUlBLElBQUlDLFNBQVMsNEJBQUcsSUFBSUMsZUFBSixDQUFvQkosTUFBTSxDQUFDSyxRQUFQLENBQWdCQyxNQUFwQyxDQUFILENBQWI7QUFFQSxJQUFJQyxFQUFFLDRCQUFHSixTQUFTLENBQUNLLEdBQVYsQ0FBYyxJQUFkLENBQUgsQ0FBTixDLENBQ0E7O0FBS0EsZUFBZU4sSUFBZixHQUFzQjtBQUFBO0FBQ3BCLE1BQUlPLElBQUksNEJBQUcsTUFBTUMsV0FBVyxDQUFDSCxFQUFELENBQXBCLENBQVIsQ0FEb0IsQ0FFcEI7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgaW5pdCgpO1xyXG59KTtcclxuXHJcbmxldCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG5cclxubGV0IGlkID0gdXJsUGFyYW1zLmdldChcImlkXCIpO1xyXG4vLyBjb25zb2xlLmxvZyhpZCk7XHJcblxyXG5cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbml0KCkge1xyXG4gIGxldCB1c2VyID0gYXdhaXQgZ2V0VXNlckJ5SWQoaWQpO1xyXG4gIC8vIGNvbnNvbGUubG9nKHVzZXIpO1xyXG59XHJcblxyXG4iXX0=