import {NextResponse } from "next/server";

export function DELETE(){
    return NextResponse.json({massage:"delete"})
}