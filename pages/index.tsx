import type { NextPage } from 'next'
import Head from 'next/head'
import { BodyComponent } from '../components/BodyComponent/BodyComponent'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <BodyComponent>
      <p style={{textAlign:"justify"}}>
        Bienvenidos a Love4Gaming, les habla ESCANOR, quiero contarles cómo nació nuestra comunidad. Durante años perseguí este sueño con la idea de crear un lugar propio al que pertenecer, donde nadie pida ningún requisito definido; nada de puntos de poder, ni habilidad, de ningún tipo; sólo amor por los videojuegos y respeto hacia los demás. Con el paso del tiempo me di cuenta que este sueño no era sólo mío, fui encontrándome gente en el camino con mi mismo sueño. Algunos de ellos a pesar de soñar lo mismo, no lo veían como una meta u objetivo a lograr, otros, compartieron y entendieron mi visión, NUESTRA visión. 
      </p>
      <p style={{textAlign:"justify"}}>
      Hoy Love4Gaming tiene su corazón y piel construida a imagen y semejanza de los sueños de quienes entendieron y entienden el propósito de esta comunidad, hay una parte de cada uno de ellos reflejada en este bello proyecto. A veces las cosas no surgen por sí solas, necesitan un empuje, una fuerza que ponga las cosas en movimiento; esa magia, esa mecánica, es la AMISTAD. 
      </p>
      <p style={{textAlign:"justify"}}>
      Hay un hilo del destino que nació en mi corazón y que conectó cada uno de nuestros corazones formando una gran red, ya no estamos solos, somos una COMUNIDAD. 
      </p>
      <ul>
        <li>A aquellos que entiendan la importancia de amar.</li>
	      <li>A aquellos que entiendan la importancia de soñar.</li>
	      <li>A aquellos que entiendan la importancia de creer.</li>
	      <li>A aquellos que entiendan la importancia de confiar.</li>
	      <li>A aquellos que entiendan la importancia de la amistad. </li>

      </ul>
    </BodyComponent>
  )
}

export default Home
