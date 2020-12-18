import React from "react";

export default function UserInfo(user) {
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
      <h4>Marital status</h4>
      <p>{user.maritalStatus}</p>

      {user.parents && user.parents.length ? (
        <>
          <h4>Parents</h4>
          {user.parents.map((parent) => {
            return <p key={parent._id + parent.name}>{parent.name}</p>;
          })}
        </>
      ) : null}
      {user.spouse ? (
        <>
          <h4>Spouse</h4>
          <p>{user.spouse.name}</p>
        </>
      ) : null}

      {user.children.length ? (
        <>
          <h4>Children</h4>
          {user.children.map((child, i) => {
            return <p key={i}> {child.name}</p>;
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
