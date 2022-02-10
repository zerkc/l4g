import type { NextPage } from 'next'
import Head from 'next/head'
import { BodyComponent } from '../components/BodyComponent/BodyComponent'
import styles from '../styles/e-sports.module.scss'

const nfts: NextPage = ({games}: any) => {
  return (
    <BodyComponent>
      <h1 className={styles.title}>NFT&apos;s</h1>
      <section className={styles.Section}>
        {games.map((e:any)=>{
          return <img key={e.src} src={e.src} />
        })}
        <img />        
      </section>
    </BodyComponent>
  )
}

export async function getStaticProps() {
  

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      games:[
        {src:"/images/Logo Thetan Arena Render.png"},
        {src:"/images/Logo Mir4 Render.png"},
        {src:"/images/Logo Axie Infinity Render.png"},
      ],
    },
  }
}

export default nfts
