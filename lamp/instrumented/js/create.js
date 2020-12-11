"use strict";

function cov_8q0s6i8dp() {
  var path = "C:\\xampp\\htdocs\\fakeID\\lamp\\js\\create.js";
  var hash = "35f1a4acc8f7360b0f293ba286bb3cbf1cae8691";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\xampp\\htdocs\\fakeID\\lamp\\js\\create.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 4,
          column: 25
        }
      },
      "1": {
        start: {
          line: 5,
          column: 13
        },
        end: {
          line: 7,
          column: 55
        }
      },
      "2": {
        start: {
          line: 8,
          column: 16
        },
        end: {
          line: 8,
          column: 30
        }
      },
      "3": {
        start: {
          line: 11,
          column: 11
        },
        end: {
          line: 11,
          column: 53
        }
      },
      "4": {
        start: {
          line: 12,
          column: 11
        },
        end: {
          line: 12,
          column: 58
        }
      },
      "5": {
        start: {
          line: 13,
          column: 11
        },
        end: {
          line: 13,
          column: 56
        }
      },
      "6": {
        start: {
          line: 15,
          column: 2
        },
        end: {
          line: 15,
          column: 25
        }
      },
      "7": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 16,
          column: 21
        }
      },
      "8": {
        start: {
          line: 18,
          column: 19
        },
        end: {
          line: 18,
          column: 63
        }
      },
      "9": {
        start: {
          line: 20,
          column: 2
        },
        end: {
          line: 20,
          column: 41
        }
      },
      "10": {
        start: {
          line: 22,
          column: 17
        },
        end: {
          line: 25,
          column: 4
        }
      },
      "11": {
        start: {
          line: 26,
          column: 2
        },
        end: {
          line: 26,
          column: 24
        }
      },
      "12": {
        start: {
          line: 28,
          column: 2
        },
        end: {
          line: 28,
          column: 35
        }
      },
      "13": {
        start: {
          line: 29,
          column: 2
        },
        end: {
          line: 36,
          column: 3
        }
      },
      "14": {
        start: {
          line: 30,
          column: 4
        },
        end: {
          line: 30,
          column: 50
        }
      },
      "15": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 33,
          column: 13
        }
      },
      "16": {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 32,
          column: 34
        }
      },
      "17": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 50
        }
      }
    },
    fnMap: {
      "0": {
        name: "submitCreateForm",
        decl: {
          start: {
            line: 3,
            column: 15
          },
          end: {
            line: 3,
            column: 31
          }
        },
        loc: {
          start: {
            line: 3,
            column: 39
          },
          end: {
            line: 37,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 31,
            column: 15
          },
          end: {
            line: 31,
            column: 16
          }
        },
        loc: {
          start: {
            line: 31,
            column: 21
          },
          end: {
            line: 33,
            column: 5
          }
        },
        line: 31
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 36,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 36,
            column: 3
          }
        }, {
          start: {
            line: 29,
            column: 2
          },
          end: {
            line: 36,
            column: 3
          }
        }],
        line: 29
      }
    },
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
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "35f1a4acc8f7360b0f293ba286bb3cbf1cae8691"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_8q0s6i8dp = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_8q0s6i8dp();

async function submitCreateForm(event) {
  cov_8q0s6i8dp().f[0]++;
  cov_8q0s6i8dp().s[0]++;
  event.preventDefault();
  let date = (cov_8q0s6i8dp().s[1]++, document.querySelector("form").querySelector('input[name="date_of_birth"]').value);
  let newDate = (cov_8q0s6i8dp().s[2]++, new Date(date)); // console.log(date);
  // console.log(newDate);

  var dd = (cov_8q0s6i8dp().s[3]++, String(newDate.getDate()).padStart(2, "0"));
  var mm = (cov_8q0s6i8dp().s[4]++, String(newDate.getMonth() + 1).padStart(2, "0"));
  var yy = (cov_8q0s6i8dp().s[5]++, newDate.getFullYear().toString().substr(2, 2));
  cov_8q0s6i8dp().s[6]++;
  newDate = dd + mm + yy;
  cov_8q0s6i8dp().s[7]++;
  newDate.toString();
  const formData = (cov_8q0s6i8dp().s[8]++, new FormData(document.querySelector("form")));
  cov_8q0s6i8dp().s[9]++;
  formData.set("date_of_birth", newDate);
  let response = (cov_8q0s6i8dp().s[10]++, await fetch(path + "api/users", {
    method: "POST",
    body: formData
  }));
  cov_8q0s6i8dp().s[11]++;
  console.log(response);
  cov_8q0s6i8dp().s[12]++;
  response = await response.json();
  cov_8q0s6i8dp().s[13]++;

  if (response.status) {
    cov_8q0s6i8dp().b[0][0]++;
    cov_8q0s6i8dp().s[14]++;
    createNotification("success", "User created");
    cov_8q0s6i8dp().s[15]++;
    setTimeout(() => {
      cov_8q0s6i8dp().f[1]++;
      cov_8q0s6i8dp().s[16]++;
      window.location.href = path;
    }, 3000);
  } else {
    cov_8q0s6i8dp().b[0][1]++;
    cov_8q0s6i8dp().s[17]++;
    createNotification("error", response.message);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS5qcyJdLCJuYW1lcyI6WyJzdWJtaXRDcmVhdGVGb3JtIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsIm5ld0RhdGUiLCJEYXRlIiwiZGQiLCJTdHJpbmciLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtbSIsImdldE1vbnRoIiwieXkiLCJnZXRGdWxsWWVhciIsInRvU3RyaW5nIiwic3Vic3RyIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInNldCIsInJlc3BvbnNlIiwiZmV0Y2giLCJwYXRoIiwibWV0aG9kIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwic3RhdHVzIiwiY3JlYXRlTm90aWZpY2F0aW9uIiwic2V0VGltZW91dCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7O0FBYlosZUFBZUEsZ0JBQWYsQ0FBZ0NDLEtBQWhDLEVBQXVDO0FBQUE7QUFBQTtBQUNyQ0EsRUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0EsTUFBSUMsSUFBSSw0QkFBR0MsUUFBUSxDQUNoQkMsYUFEUSxDQUNNLE1BRE4sRUFFUkEsYUFGUSxDQUVNLDZCQUZOLEVBRXFDQyxLQUZ4QyxDQUFSO0FBR0EsTUFBSUMsT0FBTyw0QkFBRyxJQUFJQyxJQUFKLENBQVNMLElBQVQsQ0FBSCxDQUFYLENBTHFDLENBTXJDO0FBQ0E7O0FBQ0EsTUFBSU0sRUFBRSw0QkFBR0MsTUFBTSxDQUFDSCxPQUFPLENBQUNJLE9BQVIsRUFBRCxDQUFOLENBQTBCQyxRQUExQixDQUFtQyxDQUFuQyxFQUFzQyxHQUF0QyxDQUFILENBQU47QUFDQSxNQUFJQyxFQUFFLDRCQUFHSCxNQUFNLENBQUNILE9BQU8sQ0FBQ08sUUFBUixLQUFxQixDQUF0QixDQUFOLENBQStCRixRQUEvQixDQUF3QyxDQUF4QyxFQUEyQyxHQUEzQyxDQUFILENBQU47QUFDQSxNQUFJRyxFQUFFLDRCQUFHUixPQUFPLENBQUNTLFdBQVIsR0FBc0JDLFFBQXRCLEdBQWlDQyxNQUFqQyxDQUF3QyxDQUF4QyxFQUEyQyxDQUEzQyxDQUFILENBQU47QUFWcUM7QUFZckNYLEVBQUFBLE9BQU8sR0FBR0UsRUFBRSxHQUFHSSxFQUFMLEdBQVVFLEVBQXBCO0FBWnFDO0FBYXJDUixFQUFBQSxPQUFPLENBQUNVLFFBQVI7QUFFQSxRQUFNRSxRQUFRLDRCQUFHLElBQUlDLFFBQUosQ0FBYWhCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiLENBQUgsQ0FBZDtBQWZxQztBQWlCckNjLEVBQUFBLFFBQVEsQ0FBQ0UsR0FBVCxDQUFhLGVBQWIsRUFBOEJkLE9BQTlCO0FBRUEsTUFBSWUsUUFBUSw2QkFBRyxNQUFNQyxLQUFLLENBQUNDLElBQUksR0FBRyxXQUFSLEVBQXFCO0FBQzdDQyxJQUFBQSxNQUFNLEVBQUUsTUFEcUM7QUFFN0NDLElBQUFBLElBQUksRUFBRVA7QUFGdUMsR0FBckIsQ0FBZCxDQUFaO0FBbkJxQztBQXVCckNRLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixRQUFaO0FBdkJxQztBQXlCckNBLEVBQUFBLFFBQVEsR0FBRyxNQUFNQSxRQUFRLENBQUNPLElBQVQsRUFBakI7QUF6QnFDOztBQTBCckMsTUFBSVAsUUFBUSxDQUFDUSxNQUFiLEVBQXFCO0FBQUE7QUFBQTtBQUNuQkMsSUFBQUEsa0JBQWtCLENBQUMsU0FBRCxFQUFZLGNBQVosQ0FBbEI7QUFEbUI7QUFFbkJDLElBQUFBLFVBQVUsQ0FBQyxNQUFNO0FBQUE7QUFBQTtBQUNmQyxNQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCWCxJQUF2QjtBQUNELEtBRlMsRUFFUCxJQUZPLENBQVY7QUFHRCxHQUxELE1BS087QUFBQTtBQUFBO0FBQ0xPLElBQUFBLGtCQUFrQixDQUFDLE9BQUQsRUFBVVQsUUFBUSxDQUFDYyxPQUFuQixDQUFsQjtBQUNEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHN1Ym1pdENyZWF0ZUZvcm0oZXZlbnQpIHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGxldCBkYXRlID0gZG9jdW1lbnRcclxuICAgIC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKVxyXG4gICAgLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJkYXRlX29mX2JpcnRoXCJdJykudmFsdWU7XHJcbiAgbGV0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAvLyBjb25zb2xlLmxvZyhkYXRlKTtcclxuICAvLyBjb25zb2xlLmxvZyhuZXdEYXRlKTtcclxuICB2YXIgZGQgPSBTdHJpbmcobmV3RGF0ZS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcclxuICB2YXIgbW0gPSBTdHJpbmcobmV3RGF0ZS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gIHZhciB5eSA9IG5ld0RhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpLnN1YnN0cigyLCAyKTtcclxuXHJcbiAgbmV3RGF0ZSA9IGRkICsgbW0gKyB5eTtcclxuICBuZXdEYXRlLnRvU3RyaW5nKCk7XHJcblxyXG4gIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpKTtcclxuXHJcbiAgZm9ybURhdGEuc2V0KFwiZGF0ZV9vZl9iaXJ0aFwiLCBuZXdEYXRlKTtcclxuXHJcbiAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocGF0aCArIFwiYXBpL3VzZXJzXCIsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBib2R5OiBmb3JtRGF0YSxcclxuICB9KTtcclxuICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gIHJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gIGlmIChyZXNwb25zZS5zdGF0dXMpIHtcclxuICAgIGNyZWF0ZU5vdGlmaWNhdGlvbihcInN1Y2Nlc3NcIiwgXCJVc2VyIGNyZWF0ZWRcIik7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRoO1xyXG4gICAgfSwgMzAwMCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNyZWF0ZU5vdGlmaWNhdGlvbihcImVycm9yXCIsIHJlc3BvbnNlLm1lc3NhZ2UpO1xyXG4gIH1cclxufVxyXG4iXX0=