function cov_1511ktsu9w() {
  var path = "C:\\xampp\\htdocs\\fakeID\\lamp\\cypress\\integration\\createUser.spec.js";
  var hash = "4e8e6e12d644e9526091f9b8a63914f840356923";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\xampp\\htdocs\\fakeID\\lamp\\cypress\\integration\\createUser.spec.js",
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
          column: 50
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
          line: 36,
          column: 3
        }
      },
      "4": {
        start: {
          line: 8,
          column: 13
        },
        end: {
          line: 16,
          column: 3
        }
      },
      "5": {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 30,
          column: 5
        }
      },
      "6": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 49
        }
      },
      "7": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 65
        }
      },
      "8": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 60
        }
      },
      "9": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 47
        }
      },
      "10": {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 26,
          column: 53
        }
      },
      "11": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 43
        }
      },
      "12": {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 35,
          column: 5
        }
      },
      "13": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 42
        }
      },
      "14": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 34,
          column: 27
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
            column: 36
          },
          end: {
            line: 7,
            column: 37
          }
        },
        loc: {
          start: {
            line: 7,
            column: 42
          },
          end: {
            line: 36,
            column: 1
          }
        },
        line: 7
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 18,
            column: 37
          },
          end: {
            line: 18,
            column: 38
          }
        },
        loc: {
          start: {
            line: 18,
            column: 43
          },
          end: {
            line: 30,
            column: 3
          }
        },
        line: 18
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 32,
            column: 39
          },
          end: {
            line: 32,
            column: 40
          }
        },
        loc: {
          start: {
            line: 32,
            column: 45
          },
          end: {
            line: 35,
            column: 3
          }
        },
        line: 32
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
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4e8e6e12d644e9526091f9b8a63914f840356923"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1511ktsu9w = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1511ktsu9w();
cov_1511ktsu9w().s[0]++;
it('finds the content "type"', () => {
  cov_1511ktsu9w().f[0]++;
  cov_1511ktsu9w().s[1]++;
  cy.visit("localhost:80/fakeid/lamp/create.php");
  cov_1511ktsu9w().s[2]++;
  cy.contains("FakeID");
});
cov_1511ktsu9w().s[3]++;
describe("Create an employee user", () => {
  cov_1511ktsu9w().f[1]++;
  let user = (cov_1511ktsu9w().s[4]++, {
    name: "Lea RoboCop",
    dateOfBirth: "1988-10-13",
    address_id: 1,
    genderValue: "0002",
    isEmployee: false // profileAddressId: 2,
    // description: `Martin Rhode description`

  });
  cov_1511ktsu9w().s[5]++;
  it("type in new employee details", () => {
    cov_1511ktsu9w().f[2]++;
    cov_1511ktsu9w().s[6]++;
    cy.get('input[name="name"]').type(user.name);
    cov_1511ktsu9w().s[7]++;
    cy.get('input[name="date_of_birth"]').type(user.dateOfBirth);
    cov_1511ktsu9w().s[8]++;
    cy.get('select[name="address_id"]').select("Lygten 17"); // cy.get('input[name="gender_value"]').check(user.genderValue);

    cov_1511ktsu9w().s[9]++;
    cy.get("label").contains("Female").click();
    cov_1511ktsu9w().s[10]++;
    cy.get("label").contains("Not Employee").click(); // cy.get('input[name="isEmployee"]').check(user.isEmployee);

    cov_1511ktsu9w().s[11]++;
    cy.get('input[type="submit"]').click();
  });
  cov_1511ktsu9w().s[12]++;
  it("makes sure new user is created", () => {
    cov_1511ktsu9w().f[3]++;
    cov_1511ktsu9w().s[13]++;
    cy.visit("localhost:80/fakeid/lamp/");
    cov_1511ktsu9w().s[14]++;
    cy.contains(user.name);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZVVzZXIuc3BlYy5qcyJdLCJuYW1lcyI6WyJpdCIsImN5IiwidmlzaXQiLCJjb250YWlucyIsImRlc2NyaWJlIiwidXNlciIsIm5hbWUiLCJkYXRlT2ZCaXJ0aCIsImFkZHJlc3NfaWQiLCJnZW5kZXJWYWx1ZSIsImlzRW1wbG95ZWUiLCJnZXQiLCJ0eXBlIiwic2VsZWN0IiwiY2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7Ozs7QUFmWkEsRUFBRSxDQUFDLDBCQUFELEVBQTZCLE1BQU07QUFBQTtBQUFBO0FBQ25DQyxFQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUyxxQ0FBVDtBQURtQztBQUduQ0QsRUFBQUEsRUFBRSxDQUFDRSxRQUFILENBQVksUUFBWjtBQUNELENBSkMsQ0FBRjs7QUFNQUMsUUFBUSxDQUFDLHlCQUFELEVBQTRCLE1BQU07QUFBQTtBQUN4QyxNQUFJQyxJQUFJLDZCQUFHO0FBQ1RDLElBQUFBLElBQUksRUFBRSxhQURHO0FBRVRDLElBQUFBLFdBQVcsRUFBRSxZQUZKO0FBR1RDLElBQUFBLFVBQVUsRUFBRSxDQUhIO0FBSVRDLElBQUFBLFdBQVcsRUFBRSxNQUpKO0FBS1RDLElBQUFBLFVBQVUsRUFBRSxLQUxILENBTVQ7QUFDQTs7QUFQUyxHQUFILENBQVI7QUFEd0M7QUFXeENWLEVBQUFBLEVBQUUsQ0FBQyw4QkFBRCxFQUFpQyxNQUFNO0FBQUE7QUFBQTtBQUN2Q0MsSUFBQUEsRUFBRSxDQUFDVSxHQUFILENBQU8sb0JBQVAsRUFBNkJDLElBQTdCLENBQWtDUCxJQUFJLENBQUNDLElBQXZDO0FBRHVDO0FBRXZDTCxJQUFBQSxFQUFFLENBQUNVLEdBQUgsQ0FBTyw2QkFBUCxFQUFzQ0MsSUFBdEMsQ0FBMkNQLElBQUksQ0FBQ0UsV0FBaEQ7QUFGdUM7QUFHdkNOLElBQUFBLEVBQUUsQ0FBQ1UsR0FBSCxDQUFPLDJCQUFQLEVBQW9DRSxNQUFwQyxDQUEyQyxXQUEzQyxFQUh1QyxDQUl2Qzs7QUFKdUM7QUFNdkNaLElBQUFBLEVBQUUsQ0FBQ1UsR0FBSCxDQUFPLE9BQVAsRUFBZ0JSLFFBQWhCLENBQXlCLFFBQXpCLEVBQW1DVyxLQUFuQztBQU51QztBQVF2Q2IsSUFBQUEsRUFBRSxDQUFDVSxHQUFILENBQU8sT0FBUCxFQUFnQlIsUUFBaEIsQ0FBeUIsY0FBekIsRUFBeUNXLEtBQXpDLEdBUnVDLENBVXZDOztBQVZ1QztBQVd2Q2IsSUFBQUEsRUFBRSxDQUFDVSxHQUFILENBQU8sc0JBQVAsRUFBK0JHLEtBQS9CO0FBQ0QsR0FaQyxDQUFGO0FBWHdDO0FBeUJ4Q2QsRUFBQUEsRUFBRSxDQUFDLGdDQUFELEVBQW1DLE1BQU07QUFBQTtBQUFBO0FBQ3pDQyxJQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUywyQkFBVDtBQUR5QztBQUV6Q0QsSUFBQUEsRUFBRSxDQUFDRSxRQUFILENBQVlFLElBQUksQ0FBQ0MsSUFBakI7QUFDRCxHQUhDLENBQUY7QUFJRCxDQTdCTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaXQoJ2ZpbmRzIHRoZSBjb250ZW50IFwidHlwZVwiJywgKCkgPT4ge1xyXG4gIGN5LnZpc2l0KFwibG9jYWxob3N0OjgwL2Zha2VpZC9sYW1wL2NyZWF0ZS5waHBcIik7XHJcblxyXG4gIGN5LmNvbnRhaW5zKFwiRmFrZUlEXCIpO1xyXG59KTtcclxuXHJcbmRlc2NyaWJlKFwiQ3JlYXRlIGFuIGVtcGxveWVlIHVzZXJcIiwgKCkgPT4ge1xyXG4gIGxldCB1c2VyID0ge1xyXG4gICAgbmFtZTogXCJMZWEgUm9ib0NvcFwiLFxyXG4gICAgZGF0ZU9mQmlydGg6IFwiMTk4OC0xMC0xM1wiLFxyXG4gICAgYWRkcmVzc19pZDogMSxcclxuICAgIGdlbmRlclZhbHVlOiBcIjAwMDJcIixcclxuICAgIGlzRW1wbG95ZWU6IGZhbHNlLFxyXG4gICAgLy8gcHJvZmlsZUFkZHJlc3NJZDogMixcclxuICAgIC8vIGRlc2NyaXB0aW9uOiBgTWFydGluIFJob2RlIGRlc2NyaXB0aW9uYFxyXG4gIH07XHJcblxyXG4gIGl0KFwidHlwZSBpbiBuZXcgZW1wbG95ZWUgZGV0YWlsc1wiLCAoKSA9PiB7XHJcbiAgICBjeS5nZXQoJ2lucHV0W25hbWU9XCJuYW1lXCJdJykudHlwZSh1c2VyLm5hbWUpO1xyXG4gICAgY3kuZ2V0KCdpbnB1dFtuYW1lPVwiZGF0ZV9vZl9iaXJ0aFwiXScpLnR5cGUodXNlci5kYXRlT2ZCaXJ0aCk7XHJcbiAgICBjeS5nZXQoJ3NlbGVjdFtuYW1lPVwiYWRkcmVzc19pZFwiXScpLnNlbGVjdChcIkx5Z3RlbiAxN1wiKTtcclxuICAgIC8vIGN5LmdldCgnaW5wdXRbbmFtZT1cImdlbmRlcl92YWx1ZVwiXScpLmNoZWNrKHVzZXIuZ2VuZGVyVmFsdWUpO1xyXG5cclxuICAgIGN5LmdldChcImxhYmVsXCIpLmNvbnRhaW5zKFwiRmVtYWxlXCIpLmNsaWNrKCk7XHJcblxyXG4gICAgY3kuZ2V0KFwibGFiZWxcIikuY29udGFpbnMoXCJOb3QgRW1wbG95ZWVcIikuY2xpY2soKTtcclxuXHJcbiAgICAvLyBjeS5nZXQoJ2lucHV0W25hbWU9XCJpc0VtcGxveWVlXCJdJykuY2hlY2sodXNlci5pc0VtcGxveWVlKTtcclxuICAgIGN5LmdldCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLmNsaWNrKCk7XHJcbiAgfSk7XHJcblxyXG4gIGl0KFwibWFrZXMgc3VyZSBuZXcgdXNlciBpcyBjcmVhdGVkXCIsICgpID0+IHtcclxuICAgIGN5LnZpc2l0KFwibG9jYWxob3N0OjgwL2Zha2VpZC9sYW1wL1wiKTtcclxuICAgIGN5LmNvbnRhaW5zKHVzZXIubmFtZSk7XHJcbiAgfSk7XHJcbn0pO1xyXG4iXX0=