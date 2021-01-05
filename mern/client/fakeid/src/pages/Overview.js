import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";

import "./../css/overview.css";

export function getFemales(users) {
  let females = [...users].filter((user) => user.gender === "female");
  return females;
}

export function getMales(users) {
  let males = [...users].filter((user) => user.gender === "male");
  return males;
}

export function getChildren(users) {
  let children = [...users].filter((user) => user.age < 18);
  return children;
}

export function getAdults(users) {
  let adults = [...users].filter((user) => user.age >= 18);
  return adults;
}

export function getEmployees(users) {
  let employees = [...users].filter((user) => user.CVR === "12345678");
  return employees;
}

export function getNotEmployees(users) {
  let notEmployees = [...users].filter((user) => !user.CVR);
  return notEmployees;
}

// export function getUnkown(users) {
//   let employees = [...users].filter((user) => user.maritalStatus === "Unknown");
//   return employees;
// }

// export function getMarried(users) {
//   let notEmployees = [...users].filter((user) => user.maritalStatus === "Married");
//   return notEmployees;
// }

// export function testMaleEmployee(users) {
//   let filteredUsers = getMales(users);
//   filteredUsers = getEmployees(filteredUsers);
//   return filteredUsers[0];
// }
export default function Overview() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState();
  const [displayedUsers, setDisplayUsers] = useState();
  const [isShown, setIsShown] = useState({
    isShown: false,
    style: { maxHeight: 0 },
    btnText: "Show filters",
  });
  
  const url = process.env.REACT_APP_API_URL;
  // console.log(url);
  
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(`${url}/users`);
      const data = await response.json();
      
      setUsers(data);
      setDisplayUsers(data);
      setLoading(false);
    };
    fetchUsers();
  }, [url]);
  
  const configureUrl = (id) => {
    let link;
    if(process.env.NODE_ENV === 'development'){
      link = 'http://localhost/fakeid/testpage'
    }else{
      link = 'https://fakeid-testpage.herokuapp.com'
    }
    return `${link}/user.html?mern=${id}`
  }
  if (loading) {
    return <div className="loader">LOADING</div>;
  }

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

  const handleSort = (values, filteredUsers) => {
    // console.log(values);
    let usersInDom = filteredUsers;
    // if(values)
    if (values.ageSort) {
      // console.log("sort age");
      usersInDom = [...filteredUsers].sort((a, b) => {
        return a.age - b.age;
      });
    }
    if (values.nameSort) {
      // console.log("sort name");
      usersInDom = [...filteredUsers].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        } else {
          return 1;
        }
      });
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
    console.log("apply filters", filters);
    let filteredUsers = users;
    setDisplayUsers(users);

    if (filters.adult) {
      filteredUsers = getAdults(filteredUsers);
    }
    if (filters.child) {
      filteredUsers = getChildren(filteredUsers);
    }

    if (filters.employee) {
      filteredUsers = getEmployees(filteredUsers);
    }

    if (filters.notEmployee) {
      filteredUsers = getNotEmployees(filteredUsers);
    }

    if (filters.male) {
      filteredUsers = getMales(filteredUsers);
    }

    if (filters.female) {
      filteredUsers = getFemales(filteredUsers);
    }

    console.log(filteredUsers);
    console.log("look!", filters);

    if (filters.ageSort || filters.nameSort) {
      handleSort(filters, filteredUsers);
    } else {
      setDisplayUsers(filteredUsers);
    }
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
              <a className="button" href={configureUrl(user._id)} >Login</a >
            </div>
          );
        })}
      </div>
    </div>
  );
}
