import HeaderComponent from '../Header/HeaderComponent';
import styles from './BodyComponent.module.scss';

export function BodyComponent(props : any){
    return (
        <div className={styles.Body}>
            <HeaderComponent />
            <main className={styles.main}>
                {props.children}
            </main>
            <footer>
                {/* Todo lo derechos reservados ggzdeveloper */}
            </footer>
        </div>
    )
}