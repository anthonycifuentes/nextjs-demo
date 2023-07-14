import ProductCard from "../components/product-card";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

async function getProductById(params) {
  const res = await fetch(`https://dummyjson.com/products/${params.id}`);
  const product = await res.json();
  return product;
}

const page = async ({ params }) => {
  const product = await getProductById(params);
  return (
    <div>
      <ProductCard product={product} />
    </div>
  );
};

export default page;

// // `pages` directory
// import PostLayout from '@/components/post-layout'

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
//   }
// }

// export async function getStaticProps({ params }) {
//   const res = await fetch(`https://.../posts/${params.id}`)
//   const post = await res.json()

//   return { props: { post } }
// }

// export default function Post({ post }) {
//   return <PostLayout post={post} />
// }
