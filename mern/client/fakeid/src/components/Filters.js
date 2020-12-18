import React, { useEffect, useState } from "react";

import './../css/filters.css'

export default function Filters(props) {
  const [filters, setFilters] = useState({
    female: false,
    male: false,
    child: false,
    adult: false,
    employee: false,
    notEmployee: false,
    married: false,
    unknown: false,
  });

  useEffect(() => {
    props.onChange(filters);
    // console.log(filters, "filters from useEffect");
  }, [filters]);

  const handleFilter = (type) => {
    // console.log(type);
    if (type === "ageChild") {
      setFilters((filters) => ({
        ...filters,
        adult: false,
        child: true,
      }));
    }

    if (type === "ageAdult") {
      setFilters((filters) => ({
        ...filters,
        adult: true,
        child: false,
      }));
    }

    if (type === "employee") {
      setFilters((filters) => ({
        ...filters,
        employee: true,
        notEmployee: false,
      }));
    }

    if (type === "notEmployee") {
      setFilters((filters) => ({
        ...filters,
        employee: false,
        notEmployee: true,
      }));
    }

    if (type === "Male") {
      setFilters((filters) => ({
        ...filters,
        male: true,
        female: false,
      }));
    }

    if (type === "Female") {
      setFilters((filters) => ({
        ...filters,
        male: false,
        female: true,
      }));
    }

    if (type === "genderAll") {
      setFilters((filters) => ({
        ...filters,
        male: false,
        female: false,
      }));
    }

    if (type === "ageAll") {
      setFilters((filters) => ({
        ...filters,
        adult: false,
        child: false,
      }));
    }
    if (type === "employeeAll") {
      setFilters((filters) => ({
        ...filters,
        employee: false,
        notEmployee: false,
      }));
    }
  };

  return (
    <div className="filtersContainer">
        <div className="ageFilters">
          <h4>Age</h4>

          <div className="labelRadio">
              <input
                type="radio"
                value="ageAll"
                name="ageFilter"
                id="ageAll"
                onClick={() => handleFilter("ageAll")}
              />
            <label htmlFor="ageAll">All</label>
          </div>

        <div className="labelRadio">
            <input
              type="radio"
              name="ageFilter"
              value="children"
              id="children"
              onClick={() =>handleFilter("ageChild")}
            />
          <label htmlFor="children">Children</label>
        </div>

        <div className="labelRadio">
            <input
              type="radio"
              value="adults"
              name="ageFilter"
              id="adults"
              onClick={() => handleFilter("ageAdult")}
            />
          <label htmlFor="adults">Adults</label>

        </div>
       </div>

     <div className="employeeStatusFilters">
       <h4>Employee status</h4>

        <div className="labelRadio">
            <input
              type="radio"
              value="employeeAll"
              id="employeeAll"
              name="employeeFilter"
              onClick={() => handleFilter("employeeAll")}
            />
          <label htmlFor="employeeAll">All</label>
        </div>

        <div className="labelRadio">
            <input
              type="radio"
              name="employeeFilter"
              value="employee"
              id="employee"
              onClick={() => {
                handleFilter("employee");
              }}
            />
          <label htmlFor="employee">Employees</label>
        </div>

        <div className="labelRadio">
            <input
              type="radio"
              value="notEmployee"
              name="employeeFilter"
              id="notEmployee"
              onClick={() => handleFilter("notEmployee")}
            />
          <label htmlFor="notEmployee">Not Employee</label>
        </div>

    </div>

    <div className="genderFilters">
      <h4>Gender</h4>

        <div className="labelRadio">
            <input
              type="radio"
              value="genderAll"
              id="genderAll"
              name="genderFilter"
              onClick={() => handleFilter("genderAll")}
            />
          <label htmlFor="genderAll">All</label>
        </div>

        <div className="labelRadio">
            <input
              type="radio"
              name="genderFilter"
              value="Female"
              id="female"
              onClick={() => {
                handleFilter("Female");
              }}
            />
          <label htmlFor="female">Female</label>
        </div>

        <div className="labelRadio">
            <input
              type="radio"
              value="Male"
              name="genderFilter"
              id="male"
              onClick={() => handleFilter("Male")}
            />
          <label htmlFor="male">Male</label>
        </div>

    </div>

    </div>
  );
}
