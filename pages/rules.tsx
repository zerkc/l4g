import type { NextPage } from 'next'
import Head from 'next/head'
import { BodyComponent } from '../components/BodyComponent/BodyComponent'
import styles from '../styles/Home.module.css'

const Streamers: NextPage = () => {
  return (
    <BodyComponent>
      <h1>Normas de convivencia</h1>
      <p style={{textAlign:"justify"}}>1. Queda terminantemente prohibido el agredir a otros miembros de la comunidad. No se tolerarán las faltas de respeto. Política de cero toxicidad. Primer strike: advertencia seguida de una disculpa a los afectados. Segundo Strike: Ban temporal (puede que definitivo) y revisión del caso. Tercer Strike: Ban Irrevocable. </p>
      <p style={{textAlign:"justify"}}>2. Están prohibidos los comentarios xenófobos, racistas, humor negro, burlarse de atentados y cualquier otro tipo de discriminación. Entendemos que existe el sentido del humor y que dependerá de la confianza que se tenga entre las personas involucradas el uso de comentarios que involucren las prohibiciones antes mencionadas, eso es algo que siempre tendremos en cuenta; no es la búsqueda de esta regla el intervenir en asuntos propios de las mecánicas internas de cada grupo, sino sentar una base para casos particulares de ataques dirigidos a integrantes de la comunidad con el único motivo de agredir, dañar o perjudicar de alguna forma la integridad de la persona. </p>
      <p style={{textAlign:"justify"}}>3. Está prohibida la caza de brujas. En caso de buscar exponer a una persona o pedir denuncias masivas a perfil/canal/página por un tema relativo a la comunidad o que afecte de forma particular la integridad de algún miembro de la comunidad deberá comunicarse con el Staff a fin de ratificar el apoyo de la administración o bien, ante la negativa, acatarse a la regla.</p>
      <p style={{textAlign:"justify"}}>4. Sabemos que hay temas que son delicados, por ello si bien no prohibimos hablar de cuestiones que atañen a religión, fútbol, política, sexo, consumo de drogas y estupefacientes. Llamamos a consideración de los integrantes de la comunidad el tener tacto al momento de encarar estos tópicos. Los cuales entendemos, son esenciales de la sociedad y forman parte integral en los juegos. Tengan siempre presente el manejarse con respeto.</p>
      <p style={{textAlign:"justify"}}>5. Está prohibido publicar contenido pornográfico o cualquier relación a la misma (links, gemidos, orgasmos, audio/video, desnudos explicito o no, cualquier broma relacionada al CP, juguetes sexuales, screen de sitios porno). Con la excepción de aquellos que estén vinculados de forma directa a un juego.</p>
      <p style={{textAlign:"justify"}}>6. Queda prohibido el Spam de publicaciones en cualquier de nuestras redes sociales, grupos de Whatsapp y Discord. </p>
      <p style={{textAlign:"justify"}}>7. El uso del nombre Love4Gaming tanto como del logo queda completa y exclusivamente reservado para el personal autorizado desde la administración de nuestra comunidad. Su uso por quienes no cuenten con el aval correspondiente será motivo de acciones legales.</p>
    </BodyComponent>
  )
}

export default Streamers
