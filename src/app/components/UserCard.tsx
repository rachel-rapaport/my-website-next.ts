import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UserCardProps } from "../types/userCardProps";

interface UserPageProps {
  user: UserCardProps;
}

const UserCard: React.FC<UserPageProps> = ({ user }) => {
  return (
    <div className="w-auto h-auto rounded overflow-hidden shadow-lg bg-white flex flex-col items-center p-8">
      <Image
        src={user.image}
        alt={`${user.firstName} ${user.lastName}'s profile`}
        width={150}
        height={150}
        className="rounded-full object-cover mb-4"
      />
      <div className="text-center">
        <div className="font-bold text-2xl mb-2">
          {user.firstName} {user.lastName}
        </div>
        <p className="text-gray-700 text-base mb-4">{user.email}</p>
      </div>
      <Link href={`./users/${user.id}`}>
        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg hover:from-purple-600 hover:to-blue-500 transition duration-300 ease-in-out transform hover:scale-105 ">
          {user.id}
        </button>
      </Link>
    </div>
  );
};

export default UserCard;
