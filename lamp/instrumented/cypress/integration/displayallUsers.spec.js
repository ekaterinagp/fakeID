function cov_1rdp4uwch8() {
  var path = "C:\\xampp\\htdocs\\fakeID\\lamp\\cypress\\integration\\displayallUsers.spec.js";
  var hash = "19a8722c963c8b676a4a8cf0a01802b34e59a37a";
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
          column: 67
        }
      },
      "7": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 17,
          column: 3
        }
      },
      "8": {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 16,
          column: 5
        }
      },
      "9": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 70
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
            column: 61
          },
          end: {
            line: 7,
            column: 62
          }
        },
        loc: {
          start: {
            line: 7,
            column: 67
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
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 13,
            column: 38
          },
          end: {
            line: 13,
            column: 39
          }
        },
        loc: {
          start: {
            line: 13,
            column: 44
          },
          end: {
            line: 17,
            column: 1
          }
        },
        line: 13
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 14,
            column: 49
          },
          end: {
            line: 14,
            column: 50
          }
        },
        loc: {
          start: {
            line: 14,
            column: 55
          },
          end: {
            line: 16,
            column: 3
          }
        },
        line: 14
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
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "19a8722c963c8b676a4a8cf0a01802b34e59a37a"
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
describe("find element which contains Lars and click login", () => {
  cov_1rdp4uwch8().f[1]++;
  cov_1rdp4uwch8().s[5]++;
  it("get the one which contains Lars", () => {
    cov_1rdp4uwch8().f[2]++;
    cov_1rdp4uwch8().s[6]++;
    cy.contains("p", "Lars").siblings().contains("Log in").click();
  });
});
cov_1rdp4uwch8().s[7]++;
describe("count elelemts singleUser", () => {
  cov_1rdp4uwch8().f[3]++;
  cov_1rdp4uwch8().s[8]++;
  it("get all elements with a class singleUser", () => {
    cov_1rdp4uwch8().f[4]++;
    cov_1rdp4uwch8().s[9]++;
    cy.get(".container").find(".singleUser").should("have.length", 7);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3BsYXlhbGxVc2Vycy5zcGVjLmpzIl0sIm5hbWVzIjpbIml0IiwiYmFzZVVybCIsImN5IiwidmlzaXQiLCJjb250YWlucyIsImRlc2NyaWJlIiwic2libGluZ3MiLCJjbGljayIsImdldCIsImZpbmQiLCJzaG91bGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWkEsRUFBRSxDQUFDLE9BQUQsRUFBVSxNQUFNO0FBQUE7QUFDaEIsUUFBTUMsT0FBTyw2QkFBRyxpQ0FBSCxDQUFiO0FBRGdCO0FBRWhCQyxFQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0YsT0FBVDtBQUZnQjtBQUdoQkMsRUFBQUEsRUFBRSxDQUFDRSxRQUFILENBQVksUUFBWjtBQUNELENBSkMsQ0FBRjs7QUFNQUMsUUFBUSxDQUFDLGtEQUFELEVBQXFELE1BQU07QUFBQTtBQUFBO0FBQ2pFTCxFQUFBQSxFQUFFLENBQUMsaUNBQUQsRUFBb0MsTUFBTTtBQUFBO0FBQUE7QUFDMUNFLElBQUFBLEVBQUUsQ0FBQ0UsUUFBSCxDQUFZLEdBQVosRUFBaUIsTUFBakIsRUFBeUJFLFFBQXpCLEdBQW9DRixRQUFwQyxDQUE2QyxRQUE3QyxFQUF1REcsS0FBdkQ7QUFDRCxHQUZDLENBQUY7QUFHRCxDQUpPLENBQVI7O0FBTUFGLFFBQVEsQ0FBQywyQkFBRCxFQUE4QixNQUFNO0FBQUE7QUFBQTtBQUMxQ0wsRUFBQUEsRUFBRSxDQUFDLDBDQUFELEVBQTZDLE1BQU07QUFBQTtBQUFBO0FBQ25ERSxJQUFBQSxFQUFFLENBQUNNLEdBQUgsQ0FBTyxZQUFQLEVBQXFCQyxJQUFyQixDQUEwQixhQUExQixFQUF5Q0MsTUFBekMsQ0FBZ0QsYUFBaEQsRUFBK0QsQ0FBL0Q7QUFDRCxHQUZDLENBQUY7QUFHRCxDQUpPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJpdChcImxvYWRzXCIsICgpID0+IHtcclxuICBjb25zdCBiYXNlVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwL2Zha2VpZC9sYW1wXCI7XHJcbiAgY3kudmlzaXQoYmFzZVVybCk7XHJcbiAgY3kuY29udGFpbnMoXCJGYWtlSURcIik7XHJcbn0pO1xyXG5cclxuZGVzY3JpYmUoXCJmaW5kIGVsZW1lbnQgd2hpY2ggY29udGFpbnMgTGFycyBhbmQgY2xpY2sgbG9naW5cIiwgKCkgPT4ge1xyXG4gIGl0KFwiZ2V0IHRoZSBvbmUgd2hpY2ggY29udGFpbnMgTGFyc1wiLCAoKSA9PiB7XHJcbiAgICBjeS5jb250YWlucyhcInBcIiwgXCJMYXJzXCIpLnNpYmxpbmdzKCkuY29udGFpbnMoXCJMb2cgaW5cIikuY2xpY2soKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5kZXNjcmliZShcImNvdW50IGVsZWxlbXRzIHNpbmdsZVVzZXJcIiwgKCkgPT4ge1xyXG4gIGl0KFwiZ2V0IGFsbCBlbGVtZW50cyB3aXRoIGEgY2xhc3Mgc2luZ2xlVXNlclwiLCAoKSA9PiB7XHJcbiAgICBjeS5nZXQoXCIuY29udGFpbmVyXCIpLmZpbmQoXCIuc2luZ2xlVXNlclwiKS5zaG91bGQoXCJoYXZlLmxlbmd0aFwiLCA3KTtcclxuICB9KTtcclxufSk7XHJcbiJdfQ==