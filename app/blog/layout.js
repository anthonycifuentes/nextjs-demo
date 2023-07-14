export const metadata = { 
  title: "Blog Page",
  description: "Nextjs 13 is awesome!",
}

const layout = ({children}) => {
  return (
    <div style={{border: "1px solid red", margin: "16px", padding: "16px"}}>
    <h2>Blogs</h2>
    {children}
    </div>
  )
}

export default layout