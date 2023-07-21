import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  console.log('Hello from server! 🖖')
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  )
}