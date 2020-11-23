function cov_2d8htqz7yk() {
  var path = "C:\\xampp\\htdocs\\fakeID\\lamp\\cypress\\integration\\examples\\aliasing.spec.js";
  var hash = "52a37861e60092a45b1c1d002ebb980175d87a0f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\xampp\\htdocs\\fakeID\\lamp\\cypress\\integration\\examples\\aliasing.spec.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 40,
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
          column: 60
        }
      },
      "3": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 26,
          column: 4
        }
      },
      "4": {
        start: {
          line: 15,
          column: 4
        },
        end: {
          line: 17,
          column: 36
        }
      },
      "5": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 31
        }
      },
      "6": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 25,
          column: 32
        }
      },
      "7": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 39,
          column: 4
        }
      },
      "8": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 15
        }
      },
      "9": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 50
        }
      },
      "10": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 34
        }
      },
      "11": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 38,
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
            column: 20
          },
          end: {
            line: 3,
            column: 21
          }
        },
        loc: {
          start: {
            line: 3,
            column: 26
          },
          end: {
            line: 40,
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
            line: 8,
            column: 50
          },
          end: {
            line: 8,
            column: 51
          }
        },
        loc: {
          start: {
            line: 8,
            column: 56
          },
          end: {
            line: 26,
            column: 3
          }
        },
        line: 8
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 28,
            column: 44
          },
          end: {
            line: 28,
            column: 45
          }
        },
        loc: {
          start: {
            line: 28,
            column: 50
          },
          end: {
            line: 39,
            column: 3
          }
        },
        line: 28
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
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "52a37861e60092a45b1c1d002ebb980175d87a0f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2d8htqz7yk = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2d8htqz7yk();
cov_2d8htqz7yk().s[0]++;
/// <reference types="cypress" />
context('Aliasing', () => {
  cov_2d8htqz7yk().f[0]++;
  cov_2d8htqz7yk().s[1]++;
  beforeEach(() => {
    cov_2d8htqz7yk().f[1]++;
    cov_2d8htqz7yk().s[2]++;
    cy.visit('https://example.cypress.io/commands/aliasing');
  });
  cov_2d8htqz7yk().s[3]++;
  it('.as() - alias a DOM element for later use', () => {
    cov_2d8htqz7yk().f[2]++;
    cov_2d8htqz7yk().s[4]++;
    // https://on.cypress.io/as
    // Alias a DOM element for use later
    // We don't have to traverse to the element
    // later in our code, we reference it with @
    cy.get('.as-table').find('tbody>tr').first().find('td').first().find('button').as('firstBtn'); // when we reference the alias, we place an
    // @ in front of its name

    cov_2d8htqz7yk().s[5]++;
    cy.get('@firstBtn').click();
    cov_2d8htqz7yk().s[6]++;
    cy.get('@firstBtn').should('have.class', 'btn-success').and('contain', 'Changed');
  });
  cov_2d8htqz7yk().s[7]++;
  it('.as() - alias a route for later use', () => {
    cov_2d8htqz7yk().f[3]++;
    cov_2d8htqz7yk().s[8]++;
    // Alias the route to wait for its response
    cy.server();
    cov_2d8htqz7yk().s[9]++;
    cy.route('GET', 'comments/*').as('getComment'); // we have code that gets a comment when
    // the button is clicked in scripts.js

    cov_2d8htqz7yk().s[10]++;
    cy.get('.network-btn').click(); // https://on.cypress.io/wait

    cov_2d8htqz7yk().s[11]++;
    cy.wait('@getComment').its('status').should('eq', 200);
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsaWFzaW5nLnNwZWMuanMiXSwibmFtZXMiOlsiY29udGV4dCIsImJlZm9yZUVhY2giLCJjeSIsInZpc2l0IiwiaXQiLCJnZXQiLCJmaW5kIiwiZmlyc3QiLCJhcyIsImNsaWNrIiwic2hvdWxkIiwiYW5kIiwic2VydmVyIiwicm91dGUiLCJ3YWl0IiwiaXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7O0FBZlo7QUFFQUEsT0FBTyxDQUFDLFVBQUQsRUFBYSxNQUFNO0FBQUE7QUFBQTtBQUN4QkMsRUFBQUEsVUFBVSxDQUFDLE1BQU07QUFBQTtBQUFBO0FBQ2ZDLElBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTLDhDQUFUO0FBQ0QsR0FGUyxDQUFWO0FBRHdCO0FBS3hCQyxFQUFBQSxFQUFFLENBQUMsMkNBQUQsRUFBOEMsTUFBTTtBQUFBO0FBQUE7QUFDcEQ7QUFFQTtBQUNBO0FBQ0E7QUFFQUYsSUFBQUEsRUFBRSxDQUFDRyxHQUFILENBQU8sV0FBUCxFQUFvQkMsSUFBcEIsQ0FBeUIsVUFBekIsRUFDR0MsS0FESCxHQUNXRCxJQURYLENBQ2dCLElBRGhCLEVBQ3NCQyxLQUR0QixHQUVHRCxJQUZILENBRVEsUUFGUixFQUVrQkUsRUFGbEIsQ0FFcUIsVUFGckIsRUFQb0QsQ0FXcEQ7QUFDQTs7QUFab0Q7QUFhcEROLElBQUFBLEVBQUUsQ0FBQ0csR0FBSCxDQUFPLFdBQVAsRUFBb0JJLEtBQXBCO0FBYm9EO0FBZXBEUCxJQUFBQSxFQUFFLENBQUNHLEdBQUgsQ0FBTyxXQUFQLEVBQ0dLLE1BREgsQ0FDVSxZQURWLEVBQ3dCLGFBRHhCLEVBRUdDLEdBRkgsQ0FFTyxTQUZQLEVBRWtCLFNBRmxCO0FBR0QsR0FsQkMsQ0FBRjtBQUx3QjtBQXlCeEJQLEVBQUFBLEVBQUUsQ0FBQyxxQ0FBRCxFQUF3QyxNQUFNO0FBQUE7QUFBQTtBQUM5QztBQUNBRixJQUFBQSxFQUFFLENBQUNVLE1BQUg7QUFGOEM7QUFHOUNWLElBQUFBLEVBQUUsQ0FBQ1csS0FBSCxDQUFTLEtBQVQsRUFBZ0IsWUFBaEIsRUFBOEJMLEVBQTlCLENBQWlDLFlBQWpDLEVBSDhDLENBSzlDO0FBQ0E7O0FBTjhDO0FBTzlDTixJQUFBQSxFQUFFLENBQUNHLEdBQUgsQ0FBTyxjQUFQLEVBQXVCSSxLQUF2QixHQVA4QyxDQVM5Qzs7QUFUOEM7QUFVOUNQLElBQUFBLEVBQUUsQ0FBQ1ksSUFBSCxDQUFRLGFBQVIsRUFBdUJDLEdBQXZCLENBQTJCLFFBQTNCLEVBQXFDTCxNQUFyQyxDQUE0QyxJQUE1QyxFQUFrRCxHQUFsRDtBQUNELEdBWEMsQ0FBRjtBQVlELENBckNNLENBQVAiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSB0eXBlcz1cImN5cHJlc3NcIiAvPlxyXG5cclxuY29udGV4dCgnQWxpYXNpbmcnLCAoKSA9PiB7XHJcbiAgYmVmb3JlRWFjaCgoKSA9PiB7XHJcbiAgICBjeS52aXNpdCgnaHR0cHM6Ly9leGFtcGxlLmN5cHJlc3MuaW8vY29tbWFuZHMvYWxpYXNpbmcnKVxyXG4gIH0pXHJcblxyXG4gIGl0KCcuYXMoKSAtIGFsaWFzIGEgRE9NIGVsZW1lbnQgZm9yIGxhdGVyIHVzZScsICgpID0+IHtcclxuICAgIC8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9hc1xyXG5cclxuICAgIC8vIEFsaWFzIGEgRE9NIGVsZW1lbnQgZm9yIHVzZSBsYXRlclxyXG4gICAgLy8gV2UgZG9uJ3QgaGF2ZSB0byB0cmF2ZXJzZSB0byB0aGUgZWxlbWVudFxyXG4gICAgLy8gbGF0ZXIgaW4gb3VyIGNvZGUsIHdlIHJlZmVyZW5jZSBpdCB3aXRoIEBcclxuXHJcbiAgICBjeS5nZXQoJy5hcy10YWJsZScpLmZpbmQoJ3Rib2R5PnRyJylcclxuICAgICAgLmZpcnN0KCkuZmluZCgndGQnKS5maXJzdCgpXHJcbiAgICAgIC5maW5kKCdidXR0b24nKS5hcygnZmlyc3RCdG4nKVxyXG5cclxuICAgIC8vIHdoZW4gd2UgcmVmZXJlbmNlIHRoZSBhbGlhcywgd2UgcGxhY2UgYW5cclxuICAgIC8vIEAgaW4gZnJvbnQgb2YgaXRzIG5hbWVcclxuICAgIGN5LmdldCgnQGZpcnN0QnRuJykuY2xpY2soKVxyXG5cclxuICAgIGN5LmdldCgnQGZpcnN0QnRuJylcclxuICAgICAgLnNob3VsZCgnaGF2ZS5jbGFzcycsICdidG4tc3VjY2VzcycpXHJcbiAgICAgIC5hbmQoJ2NvbnRhaW4nLCAnQ2hhbmdlZCcpXHJcbiAgfSlcclxuXHJcbiAgaXQoJy5hcygpIC0gYWxpYXMgYSByb3V0ZSBmb3IgbGF0ZXIgdXNlJywgKCkgPT4ge1xyXG4gICAgLy8gQWxpYXMgdGhlIHJvdXRlIHRvIHdhaXQgZm9yIGl0cyByZXNwb25zZVxyXG4gICAgY3kuc2VydmVyKClcclxuICAgIGN5LnJvdXRlKCdHRVQnLCAnY29tbWVudHMvKicpLmFzKCdnZXRDb21tZW50JylcclxuXHJcbiAgICAvLyB3ZSBoYXZlIGNvZGUgdGhhdCBnZXRzIGEgY29tbWVudCB3aGVuXHJcbiAgICAvLyB0aGUgYnV0dG9uIGlzIGNsaWNrZWQgaW4gc2NyaXB0cy5qc1xyXG4gICAgY3kuZ2V0KCcubmV0d29yay1idG4nKS5jbGljaygpXHJcblxyXG4gICAgLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL3dhaXRcclxuICAgIGN5LndhaXQoJ0BnZXRDb21tZW50JykuaXRzKCdzdGF0dXMnKS5zaG91bGQoJ2VxJywgMjAwKVxyXG4gIH0pXHJcbn0pXHJcbiJdfQ==