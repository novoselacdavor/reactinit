// https://nextjs.org/docs/14/app/building-your-application/routing/route-handlers

// https://dummyjson.com/docs/products#products-all

export async function GET(request: Request) {
  console.log(request);
  //   const { searchParams } = new URL(request.url)
  //   const id = searchParams.get('id')

  //   const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'API-Key': process.env.DATA_API_KEY!,
  //     },
  //   })
  //   const product = await res.json()
  return Response.json({ product: "valja" });
}

export async function POST(request: Request) {}

export async function PATCH(request: Request) {}

export async function PUT(request: Request) {}

export async function DELETE(request: Request) {}
