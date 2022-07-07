import Layout from "../components/Layout";
import styles from "../styles/Estiloso.module.css"

export default function Estiloiso(){
    return (
        <Layout titulo="Exemplo a">
        <div className={styles.roxo}>
            <h1>Estilo Modular</h1>
        </div>
        </Layout>
    );
}