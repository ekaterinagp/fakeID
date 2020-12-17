import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./../css/overview.css";

export function testMaleEmployee(users) {
  let filteredUsers = getMales(users);
  filteredUsers = getEmployees(filteredUsers);
  return filteredUsers[0];
}

export function getFemales(users) {
  let females = users.filter((user) => user.gender == "female");
  return females;
}

export function getMales(users) {
  let males = users.filter((user) => user.gender == "male");
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
  let employees = users.filter((user) => user.CVR == "12345678");
  return employees;
}

export function getNotEmployees(users) {
  let notEmployees = users.filter((user) => !user.CVR);
  return notEmployees;
}

export function getUnkown(users) {
  let employees = users.filter((user) => user.maritalStatus == "Unknown");
  return employees;
}

export function getMarried(users) {
  let notEmployees = users.filter((user) => user.maritalStatus == "Married");
  return notEmployees;
}

export default function Overview() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState();

  const url = process.env.REACT_APP_API_URL;
  console.log(url);
  console.log(process.env);
  useEffect(() => {
    let isFetching = true;
    const fetchUsers = async () => {
      const response = await fetch(`${url}/users`);
      const data = await response.json();
      if (isFetching) {
        setUsers(data);
        setLoading(false);
      }
    };
    fetchUsers();
    return () => (isFetching = false);
  }, []);

  if (loading) {
    return <div className="loader">LOADING</div>;
  }
  console.log(users);
  return (
    <div>
      <h2>Overview</h2>
      <div className="usersContainer">
        {users.map((user) => {
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
