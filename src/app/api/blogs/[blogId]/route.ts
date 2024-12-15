import { NextResponse } from "next/server";
import { getSingleBlogAPI } from "@/app/utils/BlogsManager/api";

export async function GET(
  requestParams: { params: { [key: string]: string } }
) {
  const { blogId } = requestParams.params;
  const blog = await getSingleBlogAPI({ id: blogId });

  return NextResponse.json({ blog });
}
