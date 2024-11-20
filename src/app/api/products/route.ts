// https://nextjs.org/docs/14/app/building-your-application/routing/route-handlers

// https://dummyjson.com/docs/products#products-all

export async function GET(request: Request) {
  console.log(request);
  //   const { searchParams } = new URL(request.url)
  //   const id = searchParams.get('id')

  const res = await fetch(`https://dummyjson.com/products`);
  const products = await res.json();

  return Promise.resolve({ products });
}

export async function POST(request: Request) {}

export async function PATCH(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}
