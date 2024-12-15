import { NextResponse } from "next/server";
import { getSingleUserAPI } from "@/app/utils/UsersManager/api";

export async function GET(
  requestParams: { params: { [key: string]: string } }
) {
  const { userId } = requestParams.params;
  const data = await getSingleUserAPI({ id: userId });

  return NextResponse.json({ data });
}
