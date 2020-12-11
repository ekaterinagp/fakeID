function cov_1a7rzzw7lk() {
  var path = "C:\\xampp\\htdocs\\fakeID\\lamp\\cypress\\integration\\userDisplayed.spec.js";
  var hash = "7655fa5392f3fc9de08e0565ff6cae350bba474a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\xampp\\htdocs\\fakeID\\lamp\\cypress\\integration\\userDisplayed.spec.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 5,
          column: 3
        }
      },
      "1": {
        start: {
          line: 2,
          column: 18
        },
        end: {
          line: 2,
          column: 51
        }
      },
      "2": {
        start: {
          line: 3,
          column: 2
        },
        end: {
          line: 3,
          column: 20
        }
      },
      "3": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 4,
          column: 24
        }
      },
      "4": {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 11,
          column: 3
        }
      },
      "5": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 10,
          column: 5
        }
      },
      "6": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 68
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 12
          },
          end: {
            line: 1,
            column: 13
          }
        },
        loc: {
          start: {
            line: 1,
            column: 18
          },
          end: {
            line: 5,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 7,
            column: 63
          },
          end: {
            line: 7,
            column: 64
          }
        },
        loc: {
          start: {
            line: 7,
            column: 69
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 7
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 8,
            column: 27
          },
          end: {
            line: 8,
            column: 28
          }
        },
        loc: {
          start: {
            line: 8,
            column: 33
          },
          end: {
            line: 10,
            column: 3
          }
        },
        line: 8
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
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7655fa5392f3fc9de08e0565ff6cae350bba474a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1a7rzzw7lk = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1a7rzzw7lk();
cov_1a7rzzw7lk().s[0]++;
it("loads", () => {
  cov_1a7rzzw7lk().f[0]++;
  const baseUrl = (cov_1a7rzzw7lk().s[1]++, "http://localhost:80/fakeid/lamp");
  cov_1a7rzzw7lk().s[2]++;
  cy.visit(baseUrl);
  cov_1a7rzzw7lk().s[3]++;
  cy.contains("FakeID");
});
cov_1a7rzzw7lk().s[4]++;
describe("get the fourth element in the list and click on it", () => {
  cov_1a7rzzw7lk().f[1]++;
  cov_1a7rzzw7lk().s[5]++;
  it("get #4 in the list", () => {
    cov_1a7rzzw7lk().f[2]++;
    cov_1a7rzzw7lk().s[6]++;
    cy.get(".singleUser").eq(3).siblings().contains("Edit").click();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJEaXNwbGF5ZWQuc3BlYy5qcyJdLCJuYW1lcyI6WyJpdCIsImJhc2VVcmwiLCJjeSIsInZpc2l0IiwiY29udGFpbnMiLCJkZXNjcmliZSIsImdldCIsImVxIiwic2libGluZ3MiLCJjbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWkEsRUFBRSxDQUFDLE9BQUQsRUFBVSxNQUFNO0FBQUE7QUFDaEIsUUFBTUMsT0FBTyw2QkFBRyxpQ0FBSCxDQUFiO0FBRGdCO0FBRWhCQyxFQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0YsT0FBVDtBQUZnQjtBQUdoQkMsRUFBQUEsRUFBRSxDQUFDRSxRQUFILENBQVksUUFBWjtBQUNELENBSkMsQ0FBRjs7QUFNQUMsUUFBUSxDQUFDLG9EQUFELEVBQXVELE1BQU07QUFBQTtBQUFBO0FBQ25FTCxFQUFBQSxFQUFFLENBQUMsb0JBQUQsRUFBdUIsTUFBTTtBQUFBO0FBQUE7QUFDN0JFLElBQUFBLEVBQUUsQ0FBQ0ksR0FBSCxDQUFPLGFBQVAsRUFBc0JDLEVBQXRCLENBQXlCLENBQXpCLEVBQTRCQyxRQUE1QixHQUF1Q0osUUFBdkMsQ0FBZ0QsTUFBaEQsRUFBd0RLLEtBQXhEO0FBQ0QsR0FGQyxDQUFGO0FBR0QsQ0FKTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaXQoXCJsb2Fkc1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgYmFzZVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MC9mYWtlaWQvbGFtcFwiO1xyXG4gIGN5LnZpc2l0KGJhc2VVcmwpO1xyXG4gIGN5LmNvbnRhaW5zKFwiRmFrZUlEXCIpO1xyXG59KTtcclxuXHJcbmRlc2NyaWJlKFwiZ2V0IHRoZSBmb3VydGggZWxlbWVudCBpbiB0aGUgbGlzdCBhbmQgY2xpY2sgb24gaXRcIiwgKCkgPT4ge1xyXG4gIGl0KFwiZ2V0ICM0IGluIHRoZSBsaXN0XCIsICgpID0+IHtcclxuICAgIGN5LmdldChcIi5zaW5nbGVVc2VyXCIpLmVxKDMpLnNpYmxpbmdzKCkuY29udGFpbnMoXCJFZGl0XCIpLmNsaWNrKCk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXX0=