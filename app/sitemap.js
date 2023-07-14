export default async function sitemap() {
  const {posts} = await fetch("https://dummyjson.com/posts").then((response) => response.json());;
  
  const allPosts = posts.map((post) => ({
    url: `http://localhost:300/post/${post.id}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = ["", "/about", "/post"].map((route) => ({
    url: `http://localhost:3000${route}`,
    lastModified: new Date().toISOString(),
  }));
  return [...routes, ...allPosts];
}
