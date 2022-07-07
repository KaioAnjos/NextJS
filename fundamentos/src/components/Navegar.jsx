import Link from 'next/link'
import styles from '../styles/Navegador.module.css'
export default function Navegar(props){
    return (
        <Link href={props.destino}>
           <div className={styles.navegador} style={{
            backgroundColor: props.cor ?? 'aqua'
           }}
           >
           {props.texto}
            </div> 
           </Link>
    );
}