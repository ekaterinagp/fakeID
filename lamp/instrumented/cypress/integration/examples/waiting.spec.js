function cov_ajbojs10s() {
  var path = "C:\\xampp\\htdocs\\fakeID\\lamp\\cypress\\integration\\examples\\waiting.spec.js";
  var hash = "be39767f6e8672a69ce70b41ce4b82c74d220532";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\xampp\\htdocs\\fakeID\\lamp\\cypress\\integration\\examples\\waiting.spec.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 33,
          column: 2
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 6,
          column: 4
        }
      },
      "2": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 5,
          column: 59
        }
      },
      "3": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 18,
          column: 4
        }
      },
      "4": {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 12,
          column: 59
        }
      },
      "5": {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 17
        }
      },
      "6": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 59
        }
      },
      "7": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 15,
          column: 17
        }
      },
      "8": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 59
        }
      },
      "9": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 17
        }
      },
      "10": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 32,
          column: 4
        }
      },
      "11": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 15
        }
      },
      "12": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 50
        }
      },
      "13": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 34
        }
      },
      "14": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 58
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 19
          },
          end: {
            line: 3,
            column: 20
          }
        },
        loc: {
          start: {
            line: 3,
            column: 25
          },
          end: {
            line: 33,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 4,
            column: 13
          },
          end: {
            line: 4,
            column: 14
          }
        },
        loc: {
          start: {
            line: 4,
            column: 19
          },
          end: {
            line: 6,
            column: 3
          }
        },
        line: 4
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 11,
            column: 55
          },
          end: {
            line: 11,
            column: 56
          }
        },
        loc: {
          start: {
            line: 11,
            column: 61
          },
          end: {
            line: 18,
            column: 3
          }
        },
        line: 11
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 20,
            column: 46
          },
          end: {
            line: 20,
            column: 47
          }
        },
        loc: {
          start: {
            line: 20,
            column: 52
          },
          end: {
            line: 32,
            column: 3
          }
        },
        line: 20
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
    hash: "be39767f6e8672a69ce70b41ce4b82c74d220532"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ajbojs10s = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_ajbojs10s();
cov_ajbojs10s().s[0]++;
/// <reference types="cypress" />
context('Waiting', () => {
  cov_ajbojs10s().f[0]++;
  cov_ajbojs10s().s[1]++;
  beforeEach(() => {
    cov_ajbojs10s().f[1]++;
    cov_ajbojs10s().s[2]++;
    cy.visit('https://example.cypress.io/commands/waiting');
  }); // BE CAREFUL of adding unnecessary wait times.
  // https://on.cypress.io/best-practices#Unnecessary-Waiting
  // https://on.cypress.io/wait

  cov_ajbojs10s().s[3]++;
  it('cy.wait() - wait for a specific amount of time', () => {
    cov_ajbojs10s().f[2]++;
    cov_ajbojs10s().s[4]++;
    cy.get('.wait-input1').type('Wait 1000ms after typing');
    cov_ajbojs10s().s[5]++;
    cy.wait(1000);
    cov_ajbojs10s().s[6]++;
    cy.get('.wait-input2').type('Wait 1000ms after typing');
    cov_ajbojs10s().s[7]++;
    cy.wait(1000);
    cov_ajbojs10s().s[8]++;
    cy.get('.wait-input3').type('Wait 1000ms after typing');
    cov_ajbojs10s().s[9]++;
    cy.wait(1000);
  });
  cov_ajbojs10s().s[10]++;
  it('cy.wait() - wait for a specific route', () => {
    cov_ajbojs10s().f[3]++;
    cov_ajbojs10s().s[11]++;
    cy.server(); // Listen to GET to comments/1

    cov_ajbojs10s().s[12]++;
    cy.route('GET', 'comments/*').as('getComment'); // we have code that gets a comment when
    // the button is clicked in scripts.js

    cov_ajbojs10s().s[13]++;
    cy.get('.network-btn').click(); // wait for GET comments/1

    cov_ajbojs10s().s[14]++;
    cy.wait('@getComment').its('status').should('eq', 200);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhaXRpbmcuc3BlYy5qcyJdLCJuYW1lcyI6WyJjb250ZXh0IiwiYmVmb3JlRWFjaCIsImN5IiwidmlzaXQiLCJpdCIsImdldCIsInR5cGUiLCJ3YWl0Iiwic2VydmVyIiwicm91dGUiLCJhcyIsImNsaWNrIiwiaXRzIiwic2hvdWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7O0FBZlo7QUFFQUEsT0FBTyxDQUFDLFNBQUQsRUFBWSxNQUFNO0FBQUE7QUFBQTtBQUN2QkMsRUFBQUEsVUFBVSxDQUFDLE1BQU07QUFBQTtBQUFBO0FBQ2ZDLElBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTLDZDQUFUO0FBQ0QsR0FGUyxDQUFWLENBRHVCLENBSXZCO0FBQ0E7QUFFQTs7QUFQdUI7QUFRdkJDLEVBQUFBLEVBQUUsQ0FBQyxnREFBRCxFQUFtRCxNQUFNO0FBQUE7QUFBQTtBQUN6REYsSUFBQUEsRUFBRSxDQUFDRyxHQUFILENBQU8sY0FBUCxFQUF1QkMsSUFBdkIsQ0FBNEIsMEJBQTVCO0FBRHlEO0FBRXpESixJQUFBQSxFQUFFLENBQUNLLElBQUgsQ0FBUSxJQUFSO0FBRnlEO0FBR3pETCxJQUFBQSxFQUFFLENBQUNHLEdBQUgsQ0FBTyxjQUFQLEVBQXVCQyxJQUF2QixDQUE0QiwwQkFBNUI7QUFIeUQ7QUFJekRKLElBQUFBLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRLElBQVI7QUFKeUQ7QUFLekRMLElBQUFBLEVBQUUsQ0FBQ0csR0FBSCxDQUFPLGNBQVAsRUFBdUJDLElBQXZCLENBQTRCLDBCQUE1QjtBQUx5RDtBQU16REosSUFBQUEsRUFBRSxDQUFDSyxJQUFILENBQVEsSUFBUjtBQUNELEdBUEMsQ0FBRjtBQVJ1QjtBQWlCdkJILEVBQUFBLEVBQUUsQ0FBQyx1Q0FBRCxFQUEwQyxNQUFNO0FBQUE7QUFBQTtBQUNoREYsSUFBQUEsRUFBRSxDQUFDTSxNQUFILEdBRGdELENBR2hEOztBQUhnRDtBQUloRE4sSUFBQUEsRUFBRSxDQUFDTyxLQUFILENBQVMsS0FBVCxFQUFnQixZQUFoQixFQUE4QkMsRUFBOUIsQ0FBaUMsWUFBakMsRUFKZ0QsQ0FNaEQ7QUFDQTs7QUFQZ0Q7QUFRaERSLElBQUFBLEVBQUUsQ0FBQ0csR0FBSCxDQUFPLGNBQVAsRUFBdUJNLEtBQXZCLEdBUmdELENBVWhEOztBQVZnRDtBQVdoRFQsSUFBQUEsRUFBRSxDQUFDSyxJQUFILENBQVEsYUFBUixFQUF1QkssR0FBdkIsQ0FBMkIsUUFBM0IsRUFBcUNDLE1BQXJDLENBQTRDLElBQTVDLEVBQWtELEdBQWxEO0FBQ0QsR0FaQyxDQUFGO0FBYUQsQ0E5Qk0sQ0FBUCIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwiY3lwcmVzc1wiIC8+XHJcblxyXG5jb250ZXh0KCdXYWl0aW5nJywgKCkgPT4ge1xyXG4gIGJlZm9yZUVhY2goKCkgPT4ge1xyXG4gICAgY3kudmlzaXQoJ2h0dHBzOi8vZXhhbXBsZS5jeXByZXNzLmlvL2NvbW1hbmRzL3dhaXRpbmcnKVxyXG4gIH0pXHJcbiAgLy8gQkUgQ0FSRUZVTCBvZiBhZGRpbmcgdW5uZWNlc3Nhcnkgd2FpdCB0aW1lcy5cclxuICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vYmVzdC1wcmFjdGljZXMjVW5uZWNlc3NhcnktV2FpdGluZ1xyXG5cclxuICAvLyBodHRwczovL29uLmN5cHJlc3MuaW8vd2FpdFxyXG4gIGl0KCdjeS53YWl0KCkgLSB3YWl0IGZvciBhIHNwZWNpZmljIGFtb3VudCBvZiB0aW1lJywgKCkgPT4ge1xyXG4gICAgY3kuZ2V0KCcud2FpdC1pbnB1dDEnKS50eXBlKCdXYWl0IDEwMDBtcyBhZnRlciB0eXBpbmcnKVxyXG4gICAgY3kud2FpdCgxMDAwKVxyXG4gICAgY3kuZ2V0KCcud2FpdC1pbnB1dDInKS50eXBlKCdXYWl0IDEwMDBtcyBhZnRlciB0eXBpbmcnKVxyXG4gICAgY3kud2FpdCgxMDAwKVxyXG4gICAgY3kuZ2V0KCcud2FpdC1pbnB1dDMnKS50eXBlKCdXYWl0IDEwMDBtcyBhZnRlciB0eXBpbmcnKVxyXG4gICAgY3kud2FpdCgxMDAwKVxyXG4gIH0pXHJcblxyXG4gIGl0KCdjeS53YWl0KCkgLSB3YWl0IGZvciBhIHNwZWNpZmljIHJvdXRlJywgKCkgPT4ge1xyXG4gICAgY3kuc2VydmVyKClcclxuXHJcbiAgICAvLyBMaXN0ZW4gdG8gR0VUIHRvIGNvbW1lbnRzLzFcclxuICAgIGN5LnJvdXRlKCdHRVQnLCAnY29tbWVudHMvKicpLmFzKCdnZXRDb21tZW50JylcclxuXHJcbiAgICAvLyB3ZSBoYXZlIGNvZGUgdGhhdCBnZXRzIGEgY29tbWVudCB3aGVuXHJcbiAgICAvLyB0aGUgYnV0dG9uIGlzIGNsaWNrZWQgaW4gc2NyaXB0cy5qc1xyXG4gICAgY3kuZ2V0KCcubmV0d29yay1idG4nKS5jbGljaygpXHJcblxyXG4gICAgLy8gd2FpdCBmb3IgR0VUIGNvbW1lbnRzLzFcclxuICAgIGN5LndhaXQoJ0BnZXRDb21tZW50JykuaXRzKCdzdGF0dXMnKS5zaG91bGQoJ2VxJywgMjAwKVxyXG4gIH0pXHJcbn0pXHJcbiJdfQ==