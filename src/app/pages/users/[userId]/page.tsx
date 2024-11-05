import React from "react";
import { getUserById } from "@/app/services/user";
import UserDetails from "@/app/components/UserDetails";
import UserId from "@/app/types/userId";

export default async function Page(props: UserId) {
  const { userId } = await props.params;

  const user = await getUserById(userId);

  return (
    <>
      <UserDetails {...user}></UserDetails>
    </>
  );
}
