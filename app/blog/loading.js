import PostSkeleton from "./components/post/post-skeleton"

const loading = () => {
  return (
    <div style={{display: "flex", "flex-wrap": "wrap" }}>
        { Array(100).fill().map((_, i) => (<PostSkeleton key={i} />)) }
    </div>
  )
}

export default loading