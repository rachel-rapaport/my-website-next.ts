import React from "react";
import UserCard from "../../components/UserCard";

const page = () => {
  const user = {
    id: 1,
    firstName: "rachel",
    lastName: "rapaport",
    age: "20",
    email: "rachel@gmail.com",
    phone: "0123456789",
    birthDate: "12/12/12",
    image: "/profile.jpeg",
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <UserCard user={user} />
    </div>
  );
};

export default page;
