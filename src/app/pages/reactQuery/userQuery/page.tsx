"use client";
import UserCard from '@/app/components/UserCard'
import { getUsers } from '@/app/services/user'
import { UserCardProps } from '@/app/types/userCardProps'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const page = () => {
    const {isLoading,error,data}=useQuery({
        queryKey:['users'],
        queryFn: getUsers
    })

    if (isLoading) return <div>'Loading...'</div>
    if(error) return <div>'An error has occurred: ' + error.message</div>
    console.log(data.data);
    
  return (
    
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {data.data.map((user: UserCardProps) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
      </>
  )
}

export default page
