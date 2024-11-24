import { NextResponse, NextRequest } from "next/server";
import { getSingleProductAPI } from "@/app/utils/ProductsManager/api";

export async function GET(
  request: NextRequest,
  requestParams: { params: { [key: string]: string } }
) {
  const { productId } = requestParams.params;
  const data = await getSingleProductAPI({ id: productId });

  return NextResponse.json({ data });
}
