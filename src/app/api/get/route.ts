import { UserCardProps } from "@/app/types/userCardProps";
import { NextResponse } from "next/server";

export async function GET() {
    const users: UserCardProps[] = Array.from({ length: 30 }).map((_, index) => {
        return {
            id: index + 1,
            firstName: `First Name ${index}`,
            lastName: `Last Name ${index}`,
            age: Math.floor(Math.random() * 60) + 18, 
            email: `user${index}@example.com`,
            phone: `555-010${index}`,
            birthDate: `199${Math.floor(Math.random() * 10)}-01-01`,
            image: "/profile.jpeg",
        };
    });

    return NextResponse.json({ data: users });
}

