import React, { useEffect, useState } from "react";

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
    console.log(filters, "filters from useEffect");
  }, [filters]);

  const handleFilter = (type) => {
    console.log(type);
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
        child: false,
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
      <form>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="allAdultChildren"
              name="ageFilter"
              onClick={() => handleFilter("ageAll")}
            />
            All
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="ageFilter"
              value="children"
              onClick={() => handleFilter("ageChild")}
            />
            Children
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="adults"
              name="ageFilter"
              onClick={() => handleFilter("ageAdult")}
            />
            Adults
          </label>
        </div>
      </form>
      <form>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="employeeAll"
              name="employeeFilter"
              onClick={() => handleFilter("employeeAll")}
            />
            All
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="employeeFilter"
              value="employee"
              onClick={() => {
                console.log(filters);
                handleFilter("employee");
              }}
            />
            Employees
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="notEmployee"
              name="employeeFilter"
              onClick={() => handleFilter("notEmployee")}
            />
            Not Employees
          </label>
        </div>
      </form>

      <form>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="genderAll"
              name="genderFilter"
              onClick={() => handleFilter("genderAll")}
            />
            All
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              name="genderFilter"
              value="Female"
              onClick={() => {
                console.log(filters);
                handleFilter("Female");
              }}
            />
            Female
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Male"
              name="genderFilter"
              onClick={() => handleFilter("Male")}
            />
            Male
          </label>
        </div>
      </form>
    </div>
  );
}
