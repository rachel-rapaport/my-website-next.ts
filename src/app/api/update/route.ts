import {NextResponse } from "next/server";

export function PUT(){
    return NextResponse.json({massage:"update"})
}