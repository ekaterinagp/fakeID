"use strict";

function cov_a8w9poekl() {
  var path = "C:\\xampp\\htdocs\\fakeID\\lamp\\js\\script.js";
  var hash = "80f0ad7abf3a41870fb7970b4861382ecd1aa761";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\xampp\\htdocs\\fakeID\\lamp\\js\\script.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 5,
          column: 3
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 4,
          column: 9
        }
      },
      "2": {
        start: {
          line: 8,
          column: 17
        },
        end: {
          line: 8,
          column: 40
        }
      },
      "3": {
        start: {
          line: 9,
          column: 2
        },
        end: {
          line: 15,
          column: 5
        }
      },
      "4": {
        start: {
          line: 10,
          column: 4
        },
        end: {
          line: 14,
          column: 9
        }
      },
      "5": {
        start: {
          line: 11,
          column: 21
        },
        end: {
          line: 11,
          column: 31
        }
      },
      "6": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 23
        }
      },
      "7": {
        start: {
          line: 19,
          column: 14
        },
        end: {
          line: 19,
          column: 33
        }
      },
      "8": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 20,
          column: 21
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 32
          },
          end: {
            line: 3,
            column: 33
          }
        },
        loc: {
          start: {
            line: 3,
            column: 38
          },
          end: {
            line: 5,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "getAllUsers",
        decl: {
          start: {
            line: 7,
            column: 9
          },
          end: {
            line: 7,
            column: 20
          }
        },
        loc: {
          start: {
            line: 7,
            column: 23
          },
          end: {
            line: 16,
            column: 1
          }
        },
        line: 7
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 9,
            column: 21
          },
          end: {
            line: 9,
            column: 22
          }
        },
        loc: {
          start: {
            line: 9,
            column: 42
          },
          end: {
            line: 15,
            column: 3
          }
        },
        line: 9
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 11,
            column: 12
          },
          end: {
            line: 11,
            column: 13
          }
        },
        loc: {
          start: {
            line: 11,
            column: 21
          },
          end: {
            line: 11,
            column: 31
          }
        },
        line: 11
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 12,
            column: 12
          },
          end: {
            line: 12,
            column: 13
          }
        },
        loc: {
          start: {
            line: 12,
            column: 23
          },
          end: {
            line: 14,
            column: 7
          }
        },
        line: 12
      },
      "5": {
        name: "init",
        decl: {
          start: {
            line: 18,
            column: 15
          },
          end: {
            line: 18,
            column: 19
          }
        },
        loc: {
          start: {
            line: 18,
            column: 22
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 18
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "80f0ad7abf3a41870fb7970b4861382ecd1aa761"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_a8w9poekl = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_a8w9poekl();
cov_a8w9poekl().s[0]++;
window.addEventListener("load", () => {
  cov_a8w9poekl().f[0]++;
  cov_a8w9poekl().s[1]++;
  init();
});

function getAllUsers() {
  cov_a8w9poekl().f[1]++;
  let endpoint = (cov_a8w9poekl().s[2]++, "api/api-get-users.php");
  cov_a8w9poekl().s[3]++;
  return new Promise((resolve, reject) => {
    cov_a8w9poekl().f[2]++;
    cov_a8w9poekl().s[4]++;
    fetch(endpoint).then(res => {
      cov_a8w9poekl().f[3]++;
      cov_a8w9poekl().s[5]++;
      return res.json();
    }).then(users => {
      cov_a8w9poekl().f[4]++;
      cov_a8w9poekl().s[6]++;
      resolve(users);
    });
  });
}

async function init() {
  cov_a8w9poekl().f[5]++;
  let users = (cov_a8w9poekl().s[7]++, await getAllUsers());
  cov_a8w9poekl().s[8]++;
  console.log(users);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdCIsImdldEFsbFVzZXJzIiwiZW5kcG9pbnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJ1c2VycyIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7OztBQWJaQSxNQUFNLENBQUNDLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLE1BQU07QUFBQTtBQUFBO0FBQ3BDQyxFQUFBQSxJQUFJO0FBQ0wsQ0FGRDs7QUFJQSxTQUFTQyxXQUFULEdBQXVCO0FBQUE7QUFDckIsTUFBSUMsUUFBUSw0QkFBRyx1QkFBSCxDQUFaO0FBRHFCO0FBRXJCLFNBQU8sSUFBSUMsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixLQUFxQjtBQUFBO0FBQUE7QUFDdENDLElBQUFBLEtBQUssQ0FBQ0osUUFBRCxDQUFMLENBQ0dLLElBREgsQ0FDU0MsR0FBRCxJQUFTO0FBQUE7QUFBQTtBQUFBLGFBQUFBLEdBQUcsQ0FBQ0MsSUFBSjtBQUFVLEtBRDNCLEVBRUdGLElBRkgsQ0FFU0csS0FBRCxJQUFXO0FBQUE7QUFBQTtBQUNmTixNQUFBQSxPQUFPLENBQUNNLEtBQUQsQ0FBUDtBQUNELEtBSkg7QUFLRCxHQU5NLENBQVA7QUFPRDs7QUFFRCxlQUFlVixJQUFmLEdBQXNCO0FBQUE7QUFDcEIsTUFBSVUsS0FBSyw0QkFBRyxNQUFNVCxXQUFXLEVBQXBCLENBQVQ7QUFEb0I7QUFFcEJVLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgaW5pdCgpO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGdldEFsbFVzZXJzKCkge1xyXG4gIGxldCBlbmRwb2ludCA9IFwiYXBpL2FwaS1nZXQtdXNlcnMucGhwXCI7XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGZldGNoKGVuZHBvaW50KVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigodXNlcnMpID0+IHtcclxuICAgICAgICByZXNvbHZlKHVzZXJzKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgbGV0IHVzZXJzID0gYXdhaXQgZ2V0QWxsVXNlcnMoKTtcclxuICBjb25zb2xlLmxvZyh1c2Vycyk7XHJcbn1cclxuIl19