import type { NextPage } from 'next'
import Head from 'next/head'
import { BodyComponent } from '../components/BodyComponent/BodyComponent'
import styles from '../styles/Streamers.module.scss'

const Designers: NextPage = ({streamers} : any) => {
  return (
    <BodyComponent>
      <h1 className={styles.title}>Nuestros Diseñadores</h1>
      <section className={styles.Section}>
        {streamers.map((e:any)=>{
          return (
            <div key={e.src} className={styles.card}>
              <img src={e.src} />
              <div className={styles.contentContainer}>
                <h3 className={styles.ctitle}>{e.title}</h3>
                <div className={styles.content} dangerouslySetInnerHTML={{__html:e.content}}></div>
              </div>
            </div>
          )
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
      streamers:[
        {
          src:"/images/Rodrigo-Corani-Lopez-Logo.png",
          title:"Audney",
          content:`
          <p>Soy Andrea, pero en mi comunidad me conocen como Audney. Soy una mamá gamer de tres niños que intenta ser repostera y mejorar su nivel en videojuegos sin morir en el intento…</p>
          <p>Si bien no soy experta en el rubro, me gustan muchos los Shooters y MMORPG, siendo mis favoritos; Apex Legends, Valorant, WOW y Guild Wars. También juego LOL, Minecraft, Paladins y hago roleplay en GTA V.</p>
          <p>Amo compartir con la gente mi gusto por los juegos virtuales, y encontrarme con personas de diversas partes del mundo me llena de emoción.</p>
          <p>Espero poder conocerlos en esta hermosa comunidad <3</p>
          `
        },
        {
          src:"/images/Danny02.jpg",
          title:"Zeikuro",
          content:`
          <p>Mi nombre es Christian pero me conocen como ZeiKuro aunque algunos me dicen Shiro. Me encantan los juegos Shooter y los juegos difíciles que representen un reto, por eso mismo soy amante de la Saga Dark Souls. Si bien son estos juegos los que más se adaptan a mi estilo, disfruto de casi todo videojuego existente. Principalmente, los que más horas le doy son: MIR4, League of Legends y, Rainbow Six Siege.</p>
          <p>Si bien no soy experta en el rubro, me gustan muchos los Shooters y MMORPG, siendo mis favoritos; Apex Legends, Valorant, WOW y Guild Wars. También juego LOL, Minecraft, Paladins y hago roleplay en GTA V.</p>
          <p>"... sí representa un verdadero desafío lo quiero, necesito intentarlo..."</p>
          `
        },
      ],
    },
  }
}

export default Designers
