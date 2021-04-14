import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>cailong.me</title>
        <link rel="icon" href="/favicon.ico" />
        <script dangerouslySetInnerHTML={{
            __html: `
            if (typeof window !== "undefined") {
              window.__bl = {
                config: {
                  pid: "brw5qo9e5q@5ee571d5cded5e1",appType:"web",imgUrl:"https://arms-retcode.aliyuncs.com/r.png?",sendResource:true,enableLinkTrace:true,behavior:true,useFmp:true
                }
              }
            }`
        }} />
        <script type="text/javascript" src="https://retcode.alicdn.com/retcode/bl.js" crossorigin></script>
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
