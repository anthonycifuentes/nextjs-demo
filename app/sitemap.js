export default async function sitemap() {
  const {posts} = await fetch("https://dummyjson.com/posts").then((response) => response.json());;
  
  const allPosts = posts.map((post) => ({
    url: `https://dummyjson.com/post/${post.id}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = ["", "/about", "/post"].map((route) => ({
    url: `https://dummyjson.com/${route}`,
    lastModified: new Date().toISOString(),
  }));
  return [...routes, ...allPosts];
}
