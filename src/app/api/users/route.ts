import { getUsersAPI } from "@/app/utils/UsersManager/api";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const users = await getUsersAPI();

  return NextResponse.json({ users });
}
