function cov_1rdp4uwch8() {
  var path = "C:\\xampp\\htdocs\\fakeID\\lamp\\cypress\\integration\\displayallUsers.spec.js";
  var hash = "561981e69ebbcf5b2311624246872ea71f0f93a4";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\xampp\\htdocs\\fakeID\\lamp\\cypress\\integration\\displayallUsers.spec.js",
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
          column: 65
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
            column: 60
          },
          end: {
            line: 7,
            column: 61
          }
        },
        loc: {
          start: {
            line: 7,
            column: 66
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
            column: 40
          },
          end: {
            line: 8,
            column: 41
          }
        },
        loc: {
          start: {
            line: 8,
            column: 46
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
    hash: "561981e69ebbcf5b2311624246872ea71f0f93a4"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1rdp4uwch8 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1rdp4uwch8();
cov_1rdp4uwch8().s[0]++;
it("loads", () => {
  cov_1rdp4uwch8().f[0]++;
  const baseUrl = (cov_1rdp4uwch8().s[1]++, "http://localhost:80/fakeid/lamp");
  cov_1rdp4uwch8().s[2]++;
  cy.visit(baseUrl);
  cov_1rdp4uwch8().s[3]++;
  cy.contains("FakeID");
});
cov_1rdp4uwch8().s[4]++;
describe("find element which contains Lars and click Edit", () => {
  cov_1rdp4uwch8().f[1]++;
  cov_1rdp4uwch8().s[5]++;
  it("get the one which contains Lars", () => {
    cov_1rdp4uwch8().f[2]++;
    cov_1rdp4uwch8().s[6]++;
    cy.contains("p", "Lars").siblings().contains("Edit").click();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BsYXlhbGxVc2Vycy5zcGVjLmpzIl0sIm5hbWVzIjpbIml0IiwiYmFzZVVybCIsImN5IiwidmlzaXQiLCJjb250YWlucyIsImRlc2NyaWJlIiwic2libGluZ3MiLCJjbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWkEsRUFBRSxDQUFDLE9BQUQsRUFBVSxNQUFNO0FBQUE7QUFDaEIsUUFBTUMsT0FBTyw2QkFBRyxpQ0FBSCxDQUFiO0FBRGdCO0FBRWhCQyxFQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0YsT0FBVDtBQUZnQjtBQUdoQkMsRUFBQUEsRUFBRSxDQUFDRSxRQUFILENBQVksUUFBWjtBQUNELENBSkMsQ0FBRjs7QUFNQUMsUUFBUSxDQUFDLGlEQUFELEVBQW9ELE1BQU07QUFBQTtBQUFBO0FBQ2hFTCxFQUFBQSxFQUFFLENBQUMsaUNBQUQsRUFBb0MsTUFBTTtBQUFBO0FBQUE7QUFDMUNFLElBQUFBLEVBQUUsQ0FBQ0UsUUFBSCxDQUFZLEdBQVosRUFBaUIsTUFBakIsRUFBeUJFLFFBQXpCLEdBQW9DRixRQUFwQyxDQUE2QyxNQUE3QyxFQUFxREcsS0FBckQ7QUFDRCxHQUZDLENBQUY7QUFHRCxDQUpPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJpdChcImxvYWRzXCIsICgpID0+IHtcclxuICBjb25zdCBiYXNlVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwL2Zha2VpZC9sYW1wXCI7XHJcbiAgY3kudmlzaXQoYmFzZVVybCk7XHJcbiAgY3kuY29udGFpbnMoXCJGYWtlSURcIik7XHJcbn0pO1xyXG5cclxuZGVzY3JpYmUoXCJmaW5kIGVsZW1lbnQgd2hpY2ggY29udGFpbnMgTGFycyBhbmQgY2xpY2sgRWRpdFwiLCAoKSA9PiB7XHJcbiAgaXQoXCJnZXQgdGhlIG9uZSB3aGljaCBjb250YWlucyBMYXJzXCIsICgpID0+IHtcclxuICAgIGN5LmNvbnRhaW5zKFwicFwiLCBcIkxhcnNcIikuc2libGluZ3MoKS5jb250YWlucyhcIkVkaXRcIikuY2xpY2soKTtcclxuICB9KTtcclxufSk7XHJcbiJdfQ==