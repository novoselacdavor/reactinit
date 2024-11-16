const Page = ({ params }) => {
  console.log(params);
  const { productId } = params;
  return <div>product page sa idjem {productId}</div>;
};

export default Page;
