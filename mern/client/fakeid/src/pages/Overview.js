import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Sorters from "../components/Sorters";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";

import "./../css/overview.css";

export function getFemales(users) {
  let females = users.filter((user) => user.gender === "female");
  return females;
}

export function getMales(users) {
  let males = users.filter((user) => user.gender === "male");
  return males;
}

export function getChildren(users) {
  let children = users.filter((user) => user.age < 18);
  return children;
}

export function getAdults(users) {
  let adults = users.filter((user) => user.age >= 18);
  return adults;
}

export function getEmployees(users) {
  let employees = users.filter((user) => user.CVR === "12345678");
  return employees;
}

export function getNotEmployees(users) {
  let notEmployees = users.filter((user) => !user.CVR);
  return notEmployees;
}

export function getUnkown(users) {
  let employees = users.filter((user) => user.maritalStatus === "Unknown");
  return employees;
}

export function getMarried(users) {
  let notEmployees = users.filter((user) => user.maritalStatus === "Married");
  return notEmployees;
}

export function testMaleEmployee(users) {
  let filteredUsers = getMales(users);
  filteredUsers = getEmployees(filteredUsers);
  return filteredUsers[0];
}

export default function Overview() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState();
  const [displayedUsers, setDisplayUsers] = useState();
  const [isShown, setIsShown] = useState({
    isShown: false,
    style: { maxHeight: 0 },
    btnText: "Show filters",
  });

  // const [filters, setFilters] = useState({
  //   female: false,
  //   male: false,
  //   child: false,
  //   adult: false,
  //   employee: false,
  //   notEmployee: false,
  //   married: false,
  //   unknown: false,
  //   single: false,
  //   divorced: false,
  //   decseaced: false,
  //   partnership: false,
  //   abolishPartnership: false,
  // });

  // const filters = {
  //   female: false,
  //   male: false,
  //   child: false,
  //   adult: false,
  //   employee: false,
  //   notEmployee: false,
  //   married: false,
  //   unknown: false,
  //   single: false,
  //   divorced: false,
  //   decseaced: false,
  //   partnership: false,
  //   abolishPartnership: false,
  // };

  const url = process.env.REACT_APP_API_URL;
  // console.log(url);
  // console.log(process.env);
  useEffect(() => {
    let isFetching = true;
    const fetchUsers = async () => {
      const response = await fetch(`${url}/users`);
      const data = await response.json();
      if (isFetching) {
        setUsers(data);
        setDisplayUsers(data);
        setLoading(false);
      }
    };
    fetchUsers();
    return () => (isFetching = false);
  }, []);

  if (loading) {
    return <div className="loader">LOADING</div>;
  }
  // console.log(users);
  const handleSearch = (searchString) => {
    if (!searchString) {
      setDisplayUsers(users);
      return;
    }
    searchString = searchString.toLowerCase();
    let result = [...users].filter((user) =>
      user.name.toLowerCase().includes(searchString)
    );
    setDisplayUsers(result);
  };
  const handleSort = (values) => {
    // console.log(values);
    let usersInDom;
    // if(values)
    if (values.ageSort) {
      // console.log("sort age");
      usersInDom = [...displayedUsers].sort((a, b) => {
        return a.age - b.age;
      });
    }
    if (values.nameSort) {
      // console.log("sort name");
      usersInDom = [...displayedUsers].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } else {
          return 1;
        }
      });
    }
    if (!values.ageSort && !values.nameSort) {
      usersInDom = users;
    }
    setDisplayUsers(usersInDom);
  };

  const handleClick = () => {
    // console.log("click");
    if (!isShown.isShown) {
      setIsShown({
        isShown: true,
        style: { maxHeight: "100vh" },
        btnText: "Hide Filters",
      });
    } else {
      setIsShown({
        isShown: false,
        style: { maxHeight: "0" },
        btnText: "Show Filters",
      });
    }
  };

  const applyFilters = (filters) => {
    console.log("apply filters");

    setDisplayUsers(users);

    let filteredUsers;

    console.log(filters);

    if (filters.adult) {
      console.log("adult filter is on!");
      filteredUsers = getAdults(displayedUsers);
      setDisplayUsers(filteredUsers);
      console.log(displayedUsers, "adult");
    }
    if (filters.child) {
      filteredUsers = getChildren(displayedUsers);
      setDisplayUsers(filteredUsers);
    }

    if (filters.employee) {
      console.log("employee filter is on!");
      filteredUsers = getEmployees(displayedUsers);
      console.log(filters);
      setDisplayUsers(filteredUsers);
    }

    if (filters.notEmployee) {
      filteredUsers = getNotEmployees(displayedUsers);
      console.log(filters);
      setDisplayUsers(filteredUsers);
    }

    if (filters.male) {
      filteredUsers = getMales(displayedUsers);
      console.log(filters);
      setDisplayUsers(filteredUsers);
    }

    if (filters.female) {
      filteredUsers = getFemales(displayedUsers);
      console.log(filters);
      setDisplayUsers(filteredUsers);
      console.log(displayedUsers, "female");
    }
    console.log("look!", filters);
  };

  return (
    <div>
      <h2>Overview</h2>
      <div className="topContainer">
        <SearchBar onSearch={handleSearch} />

        <button className="filterBtn" onClick={handleClick}>
          {isShown.btnText}
        </button>

        <div className="filtersAndSortContainer" style={isShown.style}>
          <Sorters onSort={handleSort} />
          <Filters onChange={applyFilters} />
        </div>
      </div>
      <div className="usersContainer">
        {displayedUsers.map((user) => {
          return (
            <div key={user._id} className="singleUser">
              <h3>{user.name}</h3>
              <p>{user.age < 18 ? "Child" : "Adult"}</p>
              <p>{user.CVR ? "Employee" : ""}</p>
              <p>{user.maritalStatus}</p>
              <NavLink className="button" to={"/user/" + user._id}>
                Edit
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
}
