function cov_oq1igxqg0() {
  var path = "C:\\xampp\\htdocs\\fakeID\\lamp\\cypress\\integration\\notification.spec.js";
  var hash = "f6e31672ef1eb07d9d5e0b093fcb6f342512697a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\xampp\\htdocs\\fakeID\\lamp\\cypress\\integration\\notification.spec.js",
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
          column: 2
        },
        end: {
          line: 2,
          column: 53
        }
      },
      "2": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 4,
          column: 24
        }
      },
      "3": {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 15,
          column: 3
        }
      },
      "4": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 14,
          column: 5
        }
      },
      "5": {
        start: {
          line: 9,
          column: 4
        },
        end: {
          line: 9,
          column: 41
        }
      },
      "6": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 60
        }
      },
      "7": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 41
        }
      },
      "8": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 49
        }
      },
      "9": {
        start: {
          line: 17,
          column: 0
        },
        end: {
          line: 23,
          column: 3
        }
      },
      "10": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 22,
          column: 5
        }
      },
      "11": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 52
        }
      },
      "12": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 41
        }
      },
      "13": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 49
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 1,
            column: 31
          },
          end: {
            line: 1,
            column: 32
          }
        },
        loc: {
          start: {
            line: 1,
            column: 37
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
            column: 55
          },
          end: {
            line: 7,
            column: 56
          }
        },
        loc: {
          start: {
            line: 7,
            column: 61
          },
          end: {
            line: 15,
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
            column: 42
          },
          end: {
            line: 8,
            column: 43
          }
        },
        loc: {
          start: {
            line: 8,
            column: 48
          },
          end: {
            line: 14,
            column: 3
          }
        },
        line: 8
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 17,
            column: 60
          },
          end: {
            line: 17,
            column: 61
          }
        },
        loc: {
          start: {
            line: 17,
            column: 66
          },
          end: {
            line: 23,
            column: 1
          }
        },
        line: 17
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 18,
            column: 42
          },
          end: {
            line: 18,
            column: 43
          }
        },
        loc: {
          start: {
            line: 18,
            column: 48
          },
          end: {
            line: 22,
            column: 3
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
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0
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
    hash: "f6e31672ef1eb07d9d5e0b093fcb6f342512697a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_oq1igxqg0 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_oq1igxqg0();
cov_oq1igxqg0().s[0]++;
it('finds the content "type"', () => {
  cov_oq1igxqg0().f[0]++;
  cov_oq1igxqg0().s[1]++;
  cy.visit("localhost:80/fakeid/lamp/user.php?id=1");
  cov_oq1igxqg0().s[2]++;
  cy.contains("FakeID");
});
cov_oq1igxqg0().s[3]++;
describe("click on user, update and get notification", () => {
  cov_oq1igxqg0().f[1]++;
  cov_oq1igxqg0().s[4]++;
  it("go to update and get notification", () => {
    cov_oq1igxqg0().f[2]++;
    cov_oq1igxqg0().s[5]++;
    cy.get(".tabs button").eq(1).click();
    cov_oq1igxqg0().s[6]++;
    cy.get('select[name="address_id"]').select("Lygten 17");
    cov_oq1igxqg0().s[7]++;
    cy.get("input[type=submit]").click();
    cov_oq1igxqg0().s[8]++;
    cy.get(".notification").should("be.visible");
  });
});
cov_oq1igxqg0().s[9]++;
describe("create new user wwrongly get error notification", () => {
  cov_oq1igxqg0().f[3]++;
  cov_oq1igxqg0().s[10]++;
  it("go to create and get notification", () => {
    cov_oq1igxqg0().f[4]++;
    cov_oq1igxqg0().s[11]++;
    cy.visit("localhost:80/fakeid/lamp/create.php");
    cov_oq1igxqg0().s[12]++;
    cy.get("input[type=submit]").click();
    cov_oq1igxqg0().s[13]++;
    cy.get(".notification").should("be.visible");
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5zcGVjLmpzIl0sIm5hbWVzIjpbIml0IiwiY3kiLCJ2aXNpdCIsImNvbnRhaW5zIiwiZGVzY3JpYmUiLCJnZXQiLCJlcSIsImNsaWNrIiwic2VsZWN0Iiwic2hvdWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWkEsRUFBRSxDQUFDLDBCQUFELEVBQTZCLE1BQU07QUFBQTtBQUFBO0FBQ25DQyxFQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUyx3Q0FBVDtBQURtQztBQUduQ0QsRUFBQUEsRUFBRSxDQUFDRSxRQUFILENBQVksUUFBWjtBQUNELENBSkMsQ0FBRjs7QUFNQUMsUUFBUSxDQUFDLDRDQUFELEVBQStDLE1BQU07QUFBQTtBQUFBO0FBQzNESixFQUFBQSxFQUFFLENBQUMsbUNBQUQsRUFBc0MsTUFBTTtBQUFBO0FBQUE7QUFDNUNDLElBQUFBLEVBQUUsQ0FBQ0ksR0FBSCxDQUFPLGNBQVAsRUFBdUJDLEVBQXZCLENBQTBCLENBQTFCLEVBQTZCQyxLQUE3QjtBQUQ0QztBQUc1Q04sSUFBQUEsRUFBRSxDQUFDSSxHQUFILENBQU8sMkJBQVAsRUFBb0NHLE1BQXBDLENBQTJDLFdBQTNDO0FBSDRDO0FBSTVDUCxJQUFBQSxFQUFFLENBQUNJLEdBQUgsQ0FBTyxvQkFBUCxFQUE2QkUsS0FBN0I7QUFKNEM7QUFLNUNOLElBQUFBLEVBQUUsQ0FBQ0ksR0FBSCxDQUFPLGVBQVAsRUFBd0JJLE1BQXhCLENBQStCLFlBQS9CO0FBQ0QsR0FOQyxDQUFGO0FBT0QsQ0FSTyxDQUFSOztBQVVBTCxRQUFRLENBQUMsaURBQUQsRUFBb0QsTUFBTTtBQUFBO0FBQUE7QUFDaEVKLEVBQUFBLEVBQUUsQ0FBQyxtQ0FBRCxFQUFzQyxNQUFNO0FBQUE7QUFBQTtBQUM1Q0MsSUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVMscUNBQVQ7QUFENEM7QUFFNUNELElBQUFBLEVBQUUsQ0FBQ0ksR0FBSCxDQUFPLG9CQUFQLEVBQTZCRSxLQUE3QjtBQUY0QztBQUc1Q04sSUFBQUEsRUFBRSxDQUFDSSxHQUFILENBQU8sZUFBUCxFQUF3QkksTUFBeEIsQ0FBK0IsWUFBL0I7QUFDRCxHQUpDLENBQUY7QUFLRCxDQU5PLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJpdCgnZmluZHMgdGhlIGNvbnRlbnQgXCJ0eXBlXCInLCAoKSA9PiB7XHJcbiAgY3kudmlzaXQoXCJsb2NhbGhvc3Q6ODAvZmFrZWlkL2xhbXAvdXNlci5waHA/aWQ9MVwiKTtcclxuXHJcbiAgY3kuY29udGFpbnMoXCJGYWtlSURcIik7XHJcbn0pO1xyXG5cclxuZGVzY3JpYmUoXCJjbGljayBvbiB1c2VyLCB1cGRhdGUgYW5kIGdldCBub3RpZmljYXRpb25cIiwgKCkgPT4ge1xyXG4gIGl0KFwiZ28gdG8gdXBkYXRlIGFuZCBnZXQgbm90aWZpY2F0aW9uXCIsICgpID0+IHtcclxuICAgIGN5LmdldChcIi50YWJzIGJ1dHRvblwiKS5lcSgxKS5jbGljaygpO1xyXG5cclxuICAgIGN5LmdldCgnc2VsZWN0W25hbWU9XCJhZGRyZXNzX2lkXCJdJykuc2VsZWN0KFwiTHlndGVuIDE3XCIpO1xyXG4gICAgY3kuZ2V0KFwiaW5wdXRbdHlwZT1zdWJtaXRdXCIpLmNsaWNrKCk7XHJcbiAgICBjeS5nZXQoXCIubm90aWZpY2F0aW9uXCIpLnNob3VsZChcImJlLnZpc2libGVcIik7XHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuZGVzY3JpYmUoXCJjcmVhdGUgbmV3IHVzZXIgd3dyb25nbHkgZ2V0IGVycm9yIG5vdGlmaWNhdGlvblwiLCAoKSA9PiB7XHJcbiAgaXQoXCJnbyB0byBjcmVhdGUgYW5kIGdldCBub3RpZmljYXRpb25cIiwgKCkgPT4ge1xyXG4gICAgY3kudmlzaXQoXCJsb2NhbGhvc3Q6ODAvZmFrZWlkL2xhbXAvY3JlYXRlLnBocFwiKTtcclxuICAgIGN5LmdldChcImlucHV0W3R5cGU9c3VibWl0XVwiKS5jbGljaygpO1xyXG4gICAgY3kuZ2V0KFwiLm5vdGlmaWNhdGlvblwiKS5zaG91bGQoXCJiZS52aXNpYmxlXCIpO1xyXG4gIH0pO1xyXG59KTtcclxuIl19