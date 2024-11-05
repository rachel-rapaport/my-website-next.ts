import React from "react";
import { getUsers } from "../../services/user";
import UserCard from "../../components/UserCard";

export const fetchUsers = async () => {
  const response = await getUsers();
  return response.map((user) => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    age: user.age,
    email: user.email,
    phone: user.phone,
    birthDate: user.birthDate,
    image: user.image,
  }));
};

const page = async () => {
  const users = await fetchUsers();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {users.map((user) => (
        <UserCard user={user} />
      ))}
    </div>
  );
};

export default page;
