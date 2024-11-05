import React from "react";
import { UserCardProps } from "@/app/types/userCardProps";

const UserDetails: React.FC<UserCardProps> = ({
  id,
  firstName,
  lastName,
  age,
  email,
  phone,
  birthDate,
  image,
}) => {
  return (
    <div className="max-w-sm mx-auto p-6 bg-white shadow-lg rounded-lg">
      <img
        src={image}
        alt={`${firstName} ${lastName}`}
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h2 className="text-center text-xl font-bold mb-2">{`${firstName} ${lastName}`}</h2>
      <p className="text-gray-600 mb-1">
        <strong>ID:</strong> {id}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Age:</strong> {age}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Email:</strong> {email}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Phone:</strong> {phone}
      </p>
      <p className="text-gray-600 mb-1">
        <strong>Birth Date:</strong> {birthDate}
      </p>
    </div>
  );
};

export default UserDetails;
