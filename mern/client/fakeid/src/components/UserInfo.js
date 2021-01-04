import React from "react";
import {  NavLink  } from "react-router-dom";

export default function UserInfo(user) {
  console.log(user.gender);
  return (
    <>
      <h4>Date of birth</h4>
      <p>{user.formattedDate}</p>

      <h4>Address</h4>
      <p>{user.address}</p>

      <h4>CPR</h4>
      <p>{user.CPR}</p>

      <h4>Gender</h4>
      <p>{user.gender}</p>
      {!user.CVR ? (
        <>
          {" "}
          <h4>Marital status</h4>
          <p>{user.maritalStatus}</p>{" "}
        </>
      ) : null}

      {!user.CVR && user.parents && user.parents.length ? (
        <>
          <h4>Parents</h4>
          {user.parents.map((parent) => {
            return <NavLink to={'/user/'+ parent._id} key={parent._id + parent.name}>{parent.name}</NavLink>;
          })}
        </>
      ) : null}

      {!user.CVR && user.spouse && user.spouse !== null ? (
        <>
          <h4>Spouse</h4>
          <NavLink to={'/user/' + user.spouse._id}>{user.spouse.name}</NavLink>
        </>
      ) : null}

      {!user.CVR && user.children.length ? (
        <>
          <h4>Children</h4>
          {user.children.map((child, i) => {
            return <NavLink to={'/user/'+child._id} key={i}> {child.name}</NavLink>;
          })}
        </>
      ) : null}

      {user.CVR ? (
        <>
          <h4>CVR</h4>
          <p>{user.CVR}</p>
          <h4>Company</h4>
          <p>{user.companyName}</p>
        </>
      ) : null}
    </>
  );
}
