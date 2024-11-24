// https://nextjs.org/docs/14/app/building-your-application/routing/route-handlers

// https://dummyjson.com/docs/products#products-all

import { getProductsAPI } from "@/app/utils/ProductsManager/api";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const data = await getProductsAPI();

  return NextResponse.json({ data });
}

export async function POST(request: Request) {}

export async function PATCH(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}
