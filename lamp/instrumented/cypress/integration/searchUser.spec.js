function cov_1r7e8yuko8() {
  var path = "C:\\xampp\\htdocs\\fakeID\\lamp\\cypress\\integration\\searchUser.spec.js";
  var hash = "a04a9242cbeea1365ac11bd2fdcb81dfe8c750ab";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\xampp\\htdocs\\fakeID\\lamp\\cypress\\integration\\searchUser.spec.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 0
        },
        end: {
          line: 5,
          column: 5
        }
      },
      "1": {
        start: {
          line: 2,
          column: 20
        },
        end: {
          line: 2,
          column: 53
        }
      },
      "2": {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 3,
          column: 22
        }
      },
      "3": {
        start: {
          line: 4,
          column: 4
        },
        end: {
          line: 4,
          column: 26
        }
      },
      "4": {
        start: {
          line: 7,
          column: 2
        },
        end: {
          line: 15,
          column: 5
        }
      },
      "5": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 14,
          column: 7
        }
      },
      "6": {
        start: {
          line: 9,
          column: 8
        },
        end: {
          line: 9,
          column: 44
        }
      },
      "7": {
        start: {
          line: 10,
          column: 8
        },
        end: {
          line: 10,
          column: 37
        }
      },
      "8": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 12,
          column: 53
        }
      },
      "9": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 54
        }
      },
      "10": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 25,
          column: 5
        }
      },
      "11": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 24,
          column: 7
        }
      },
      "12": {
        start: {
          line: 20,
          column: 8
        },
        end: {
          line: 20,
          column: 42
        }
      },
      "13": {
        start: {
          line: 22,
          column: 8
        },
        end: {
          line: 22,
          column: 47
        }
      },
      "14": {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 23,
          column: 47
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
            column: 3
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 7,
            column: 54
          },
          end: {
            line: 7,
            column: 55
          }
        },
        loc: {
          start: {
            line: 7,
            column: 60
          },
          end: {
            line: 15,
            column: 3
          }
        },
        line: 7
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 8,
            column: 28
          },
          end: {
            line: 8,
            column: 29
          }
        },
        loc: {
          start: {
            line: 8,
            column: 34
          },
          end: {
            line: 14,
            column: 5
          }
        },
        line: 8
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 18,
            column: 51
          },
          end: {
            line: 18,
            column: 52
          }
        },
        loc: {
          start: {
            line: 18,
            column: 57
          },
          end: {
            line: 25,
            column: 3
          }
        },
        line: 18
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 19,
            column: 28
          },
          end: {
            line: 19,
            column: 29
          }
        },
        loc: {
          start: {
            line: 19,
            column: 34
          },
          end: {
            line: 24,
            column: 5
          }
        },
        line: 19
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
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0
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
    hash: "a04a9242cbeea1365ac11bd2fdcb81dfe8c750ab"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1r7e8yuko8 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1r7e8yuko8();
cov_1r7e8yuko8().s[0]++;
it("loads", () => {
  cov_1r7e8yuko8().f[0]++;
  const baseUrl = (cov_1r7e8yuko8().s[1]++, "http://localhost:80/fakeid/lamp");
  cov_1r7e8yuko8().s[2]++;
  cy.visit(baseUrl);
  cov_1r7e8yuko8().s[3]++;
  cy.contains("FakeID");
});
cov_1r7e8yuko8().s[4]++;
describe("fill in the search bar and press search", () => {
  cov_1r7e8yuko8().f[1]++;
  cov_1r7e8yuko8().s[5]++;
  it("find correct user", () => {
    cov_1r7e8yuko8().f[2]++;
    cov_1r7e8yuko8().s[6]++;
    cy.get(".searchInput").type('lisa');
    cov_1r7e8yuko8().s[7]++;
    cy.get(".searchBtn").click();
    cov_1r7e8yuko8().s[8]++;
    cy.get(".singleUser").eq(0).contains('Lisa');
    cov_1r7e8yuko8().s[9]++;
    cy.get(".singleUser").should('have.length', 1);
  });
});
cov_1r7e8yuko8().s[10]++;
describe("clear search after results are shown", () => {
  cov_1r7e8yuko8().f[3]++;
  cov_1r7e8yuko8().s[11]++;
  it("find correct user", () => {
    cov_1r7e8yuko8().f[4]++;
    cov_1r7e8yuko8().s[12]++;
    cy.get(".clearSearchBtn").click();
    cov_1r7e8yuko8().s[13]++;
    cy.get(".singleUser").contains('Lisa');
    cov_1r7e8yuko8().s[14]++;
    cy.get(".singleUser").contains('Lars');
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaFVzZXIuc3BlYy5qcyJdLCJuYW1lcyI6WyJpdCIsImJhc2VVcmwiLCJjeSIsInZpc2l0IiwiY29udGFpbnMiLCJkZXNjcmliZSIsImdldCIsInR5cGUiLCJjbGljayIsImVxIiwic2hvdWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7OztBQWZaQSxFQUFFLENBQUMsT0FBRCxFQUFVLE1BQU07QUFBQTtBQUNkLFFBQU1DLE9BQU8sNkJBQUcsaUNBQUgsQ0FBYjtBQURjO0FBRWRDLEVBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTRixPQUFUO0FBRmM7QUFHZEMsRUFBQUEsRUFBRSxDQUFDRSxRQUFILENBQVksUUFBWjtBQUNELENBSkQsQ0FBRjs7QUFNRUMsUUFBUSxDQUFDLHlDQUFELEVBQTRDLE1BQU07QUFBQTtBQUFBO0FBQ3hETCxFQUFBQSxFQUFFLENBQUMsbUJBQUQsRUFBc0IsTUFBTTtBQUFBO0FBQUE7QUFDMUJFLElBQUFBLEVBQUUsQ0FBQ0ksR0FBSCxDQUFPLGNBQVAsRUFBdUJDLElBQXZCLENBQTRCLE1BQTVCO0FBRDBCO0FBRTFCTCxJQUFBQSxFQUFFLENBQUNJLEdBQUgsQ0FBTyxZQUFQLEVBQXFCRSxLQUFyQjtBQUYwQjtBQUkxQk4sSUFBQUEsRUFBRSxDQUFDSSxHQUFILENBQU8sYUFBUCxFQUFzQkcsRUFBdEIsQ0FBeUIsQ0FBekIsRUFBNEJMLFFBQTVCLENBQXFDLE1BQXJDO0FBSjBCO0FBSzFCRixJQUFBQSxFQUFFLENBQUNJLEdBQUgsQ0FBTyxhQUFQLEVBQXNCSSxNQUF0QixDQUE2QixhQUE3QixFQUE0QyxDQUE1QztBQUNILEdBTkMsQ0FBRjtBQU9ELENBUk8sQ0FBUjs7QUFXQUwsUUFBUSxDQUFDLHNDQUFELEVBQXlDLE1BQU07QUFBQTtBQUFBO0FBQ3JETCxFQUFBQSxFQUFFLENBQUMsbUJBQUQsRUFBc0IsTUFBTTtBQUFBO0FBQUE7QUFDMUJFLElBQUFBLEVBQUUsQ0FBQ0ksR0FBSCxDQUFPLGlCQUFQLEVBQTBCRSxLQUExQjtBQUQwQjtBQUcxQk4sSUFBQUEsRUFBRSxDQUFDSSxHQUFILENBQU8sYUFBUCxFQUFzQkYsUUFBdEIsQ0FBK0IsTUFBL0I7QUFIMEI7QUFJMUJGLElBQUFBLEVBQUUsQ0FBQ0ksR0FBSCxDQUFPLGFBQVAsRUFBc0JGLFFBQXRCLENBQStCLE1BQS9CO0FBQ0gsR0FMQyxDQUFGO0FBTUQsQ0FQTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaXQoXCJsb2Fkc1wiLCAoKSA9PiB7XHJcbiAgICBjb25zdCBiYXNlVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjgwL2Zha2VpZC9sYW1wXCI7XHJcbiAgICBjeS52aXNpdChiYXNlVXJsKTtcclxuICAgIGN5LmNvbnRhaW5zKFwiRmFrZUlEXCIpO1xyXG4gIH0pO1xyXG4gIFxyXG4gIGRlc2NyaWJlKFwiZmlsbCBpbiB0aGUgc2VhcmNoIGJhciBhbmQgcHJlc3Mgc2VhcmNoXCIsICgpID0+IHtcclxuICAgIGl0KFwiZmluZCBjb3JyZWN0IHVzZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgIGN5LmdldChcIi5zZWFyY2hJbnB1dFwiKS50eXBlKCdsaXNhJyk7XHJcbiAgICAgICAgY3kuZ2V0KFwiLnNlYXJjaEJ0blwiKS5jbGljaygpO1xyXG5cclxuICAgICAgICBjeS5nZXQoXCIuc2luZ2xlVXNlclwiKS5lcSgwKS5jb250YWlucygnTGlzYScpO1xyXG4gICAgICAgIGN5LmdldChcIi5zaW5nbGVVc2VyXCIpLnNob3VsZCgnaGF2ZS5sZW5ndGgnLCAxKVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG5cclxuICBkZXNjcmliZShcImNsZWFyIHNlYXJjaCBhZnRlciByZXN1bHRzIGFyZSBzaG93blwiLCAoKSA9PiB7XHJcbiAgICBpdChcImZpbmQgY29ycmVjdCB1c2VyXCIsICgpID0+IHtcclxuICAgICAgICBjeS5nZXQoXCIuY2xlYXJTZWFyY2hCdG5cIikuY2xpY2soKTtcclxuXHJcbiAgICAgICAgY3kuZ2V0KFwiLnNpbmdsZVVzZXJcIikuY29udGFpbnMoJ0xpc2EnKTtcclxuICAgICAgICBjeS5nZXQoXCIuc2luZ2xlVXNlclwiKS5jb250YWlucygnTGFycycpO1xyXG4gICAgfSk7XHJcbiAgfSk7Il19