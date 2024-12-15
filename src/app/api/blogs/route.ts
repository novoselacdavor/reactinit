import { getBlogsAPI } from "@/app/utils/BlogsManager/api";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const blogs = await getBlogsAPI();

  return NextResponse.json({ blogs });
}
