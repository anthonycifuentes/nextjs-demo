import Post from "./components/post/Post";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const page = async () => {
  // await wait(5000);

  const {posts} = await fetch(
    "https://dummyjson.com/posts"
  ).then((response) => response.json());

  // throw new Error("The user is not logged in");

  return <div style={{display: "flex", flexWrap: "wrap" }}>
    { posts.map((post) => <Post key={post.id} title={post.title} body={post.body} />) }
  </div>;
};

export default page;



