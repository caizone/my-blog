import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>cailong.me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://cailong.me">cailong.me</a>
        </h1>

        <p className={styles.description}>
          This is cailong`s zone
        </p>

        <div className={styles.grid}>
          <a href="https://cailong.me" className={styles.card}>
            <h3>博客</h3>
            <p>记录、分享、学习</p>
          </a>

          <a href="https://cailong.me" className={styles.card}>
            <h3>Email</h3>
            <p>联系、留言、咨询</p>
          </a>

          <a
            href="https://cailong.me"
            className={styles.card}
          >
            <h3>Github</h3>
            <p>开源项目、各类实践及创造</p>
          </a>

          <a
            href="https://cailong.me"
            className={styles.card}
          >
            <h3>生活</h3>
            <p>
              摄影、vlog
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}
