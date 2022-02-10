import type { NextPage } from 'next'
import Head from 'next/head'
import { BodyComponent } from '../components/BodyComponent/BodyComponent'
import styles from '../styles/e-sports.module.scss'

const own_servers: NextPage = ({games}: any) => {
  return (
    <BodyComponent>
      <h1 className={styles.title}>Nuestros Servidores</h1>
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
        {src:"/images/Lineage-II-Logo.jpg"},
        {src:"/images/Minecraft-Logo.png"},
        {src:"/images/Mu-Online-Logo.jpg"},
      ],
    },
  }
}

export default own_servers
