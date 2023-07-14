import Image from "next/image";
import styles from './styles.module.css'

const ProductCard = ({product}) => {
  return (
    <div className={styles.card}>
    <Image
      src={product.thumbnail}
      alt="product image"
      width={360}
      height={360}
      priority
    />
    <h1>{product.title} - ★{product.rating} </h1>
    <p>{product.description}</p>
    <p>${product.price}</p>
  </div>
  )
}

export default ProductCard