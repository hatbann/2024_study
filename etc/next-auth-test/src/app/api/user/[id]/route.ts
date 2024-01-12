/** @format */
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log(params);

  const id = Number(params.id);

  return new Response(JSON.stringify({ posts: id }));
}
