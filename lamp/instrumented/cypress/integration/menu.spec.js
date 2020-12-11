function cov_268ywglzd8() {
  var path = "C:\\xampp\\htdocs\\fakeID\\lamp\\cypress\\integration\\menu.spec.js";
  var hash = "d72527fbf03495d3024fc34b3bf83f6e906c7773";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\xampp\\htdocs\\fakeID\\lamp\\cypress\\integration\\menu.spec.js",
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
          line: 13,
          column: 3
        }
      },
      "5": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 12,
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
          column: 37
        }
      },
      "7": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 46
        }
      },
      "8": {
        start: {
          line: 15,
          column: 0
        },
        end: {
          line: 21,
          column: 3
        }
      },
      "9": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 20,
          column: 5
        }
      },
      "10": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 37
        }
      },
      "11": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 31
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
            column: 71
          },
          end: {
            line: 7,
            column: 72
          }
        },
        loc: {
          start: {
            line: 7,
            column: 77
          },
          end: {
            line: 13,
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
            line: 12,
            column: 3
          }
        },
        line: 8
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 15,
            column: 50
          },
          end: {
            line: 15,
            column: 51
          }
        },
        loc: {
          start: {
            line: 15,
            column: 56
          },
          end: {
            line: 21,
            column: 1
          }
        },
        line: 15
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 16,
            column: 26
          },
          end: {
            line: 16,
            column: 27
          }
        },
        loc: {
          start: {
            line: 16,
            column: 32
          },
          end: {
            line: 20,
            column: 3
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
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
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
    hash: "d72527fbf03495d3024fc34b3bf83f6e906c7773"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_268ywglzd8 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_268ywglzd8();
cov_268ywglzd8().s[0]++;
it("loads", () => {
  cov_268ywglzd8().f[0]++;
  const baseUrl = (cov_268ywglzd8().s[1]++, "http://localhost:80/fakeid/lamp");
  cov_268ywglzd8().s[2]++;
  cy.visit(baseUrl);
  cov_268ywglzd8().s[3]++;
  cy.contains("FakeID");
});
cov_268ywglzd8().s[4]++;
describe("click on overview and go to overview page from create page", () => {
  cov_268ywglzd8().f[1]++;
  cov_268ywglzd8().s[5]++;
  it("go to overcyew page", () => {
    cov_268ywglzd8().f[2]++;
    cov_268ywglzd8().s[6]++;
    cy.get("header a").eq(0).click();
    cov_268ywglzd8().s[7]++;
    cy.get(".container").should("be.visible");
  });
});
cov_268ywglzd8().s[8]++;
describe("click on create and go to create page", () => {
  cov_268ywglzd8().f[3]++;
  cov_268ywglzd8().s[9]++;
  it("go to create page", () => {
    cov_268ywglzd8().f[4]++;
    cov_268ywglzd8().s[10]++;
    cy.get("header a").eq(2).click();
    cov_268ywglzd8().s[11]++;
    cy.contains("Create User");
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuc3BlYy5qcyJdLCJuYW1lcyI6WyJpdCIsImJhc2VVcmwiLCJjeSIsInZpc2l0IiwiY29udGFpbnMiLCJkZXNjcmliZSIsImdldCIsImVxIiwiY2xpY2siLCJzaG91bGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7O0FBZlpBLEVBQUUsQ0FBQyxPQUFELEVBQVUsTUFBTTtBQUFBO0FBQ2hCLFFBQU1DLE9BQU8sNkJBQUcsaUNBQUgsQ0FBYjtBQURnQjtBQUVoQkMsRUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVNGLE9BQVQ7QUFGZ0I7QUFHaEJDLEVBQUFBLEVBQUUsQ0FBQ0UsUUFBSCxDQUFZLFFBQVo7QUFDRCxDQUpDLENBQUY7O0FBTUFDLFFBQVEsQ0FBQyw0REFBRCxFQUErRCxNQUFNO0FBQUE7QUFBQTtBQUMzRUwsRUFBQUEsRUFBRSxDQUFDLHFCQUFELEVBQXdCLE1BQU07QUFBQTtBQUFBO0FBQzlCRSxJQUFBQSxFQUFFLENBQUNJLEdBQUgsQ0FBTyxVQUFQLEVBQW1CQyxFQUFuQixDQUFzQixDQUF0QixFQUF5QkMsS0FBekI7QUFEOEI7QUFHOUJOLElBQUFBLEVBQUUsQ0FBQ0ksR0FBSCxDQUFPLFlBQVAsRUFBcUJHLE1BQXJCLENBQTRCLFlBQTVCO0FBQ0QsR0FKQyxDQUFGO0FBS0QsQ0FOTyxDQUFSOztBQVFBSixRQUFRLENBQUMsdUNBQUQsRUFBMEMsTUFBTTtBQUFBO0FBQUE7QUFDdERMLEVBQUFBLEVBQUUsQ0FBQyxtQkFBRCxFQUFzQixNQUFNO0FBQUE7QUFBQTtBQUM1QkUsSUFBQUEsRUFBRSxDQUFDSSxHQUFILENBQU8sVUFBUCxFQUFtQkMsRUFBbkIsQ0FBc0IsQ0FBdEIsRUFBeUJDLEtBQXpCO0FBRDRCO0FBRzVCTixJQUFBQSxFQUFFLENBQUNFLFFBQUgsQ0FBWSxhQUFaO0FBQ0QsR0FKQyxDQUFGO0FBS0QsQ0FOTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaXQoXCJsb2Fkc1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgYmFzZVVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MC9mYWtlaWQvbGFtcFwiO1xyXG4gIGN5LnZpc2l0KGJhc2VVcmwpO1xyXG4gIGN5LmNvbnRhaW5zKFwiRmFrZUlEXCIpO1xyXG59KTtcclxuXHJcbmRlc2NyaWJlKFwiY2xpY2sgb24gb3ZlcnZpZXcgYW5kIGdvIHRvIG92ZXJ2aWV3IHBhZ2UgZnJvbSBjcmVhdGUgcGFnZVwiLCAoKSA9PiB7XHJcbiAgaXQoXCJnbyB0byBvdmVyY3lldyBwYWdlXCIsICgpID0+IHtcclxuICAgIGN5LmdldChcImhlYWRlciBhXCIpLmVxKDApLmNsaWNrKCk7XHJcblxyXG4gICAgY3kuZ2V0KFwiLmNvbnRhaW5lclwiKS5zaG91bGQoXCJiZS52aXNpYmxlXCIpO1xyXG4gIH0pO1xyXG59KTtcclxuXHJcbmRlc2NyaWJlKFwiY2xpY2sgb24gY3JlYXRlIGFuZCBnbyB0byBjcmVhdGUgcGFnZVwiLCAoKSA9PiB7XHJcbiAgaXQoXCJnbyB0byBjcmVhdGUgcGFnZVwiLCAoKSA9PiB7XHJcbiAgICBjeS5nZXQoXCJoZWFkZXIgYVwiKS5lcSgyKS5jbGljaygpO1xyXG5cclxuICAgIGN5LmNvbnRhaW5zKFwiQ3JlYXRlIFVzZXJcIik7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXX0=