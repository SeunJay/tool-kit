import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { value } = useSelector((state) => state.user);
  const theme = useSelector((state) => state.theme.value);
  return (
    <div style={{ color: theme }}>
      <p>Name: {value.name}</p>
      <p>Age: {value.age}</p>
      <p>Email: {value.email}</p>
    </div>
  );
};

export default Profile;
