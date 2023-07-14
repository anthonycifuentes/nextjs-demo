import styles from './styles.module.css'
const PostSkeleton = () => {
  return (
    <div className={`${styles.container}  ${styles.skeleton}`}>
    <h3></h3>
    <p></p>
</div>
  )
}

export default PostSkeleton