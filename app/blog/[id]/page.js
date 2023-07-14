export async function generateMetadata({params}) {
  const res = await fetch(`https://dummyjson.com/post/${params.id}`);
  const post = await res.json();
  return {
    title: post.title,
    description: post.body,
  };
}

const page = async ({params}) => {

  const post = await fetch(
    "https://dummyjson.com/post/1"
  ).then((response) => response.json());

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

export default page
