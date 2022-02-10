import type { NextPage } from 'next'
import Head from 'next/head'
import { BodyComponent } from '../components/BodyComponent/BodyComponent'
import styles from '../styles/e-sports.module.scss'

const esports: NextPage = ({games}: any) => {
  return (
    <BodyComponent>
      <h1 className={styles.title}>Nuestros Juegos</h1>
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
        {src:"/images/clash-royale.png"},
        {src:"/images/counter-strike.png"},
        {src:"/images/free-fire.png"},
        {src:"/images/leagu-of-legends.png"},
        {src:"/images/logo-pubg.png"},
        {src:"/images/valorant.png"},
      ],
    },
  }
}

export default esports
