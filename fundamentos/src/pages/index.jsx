import Navegar from "../components/Navegar"
export default function Inicio(){
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            Height: '100vh'
        }}>
           <Navegar texto="Estiloso" destino="/estiloso" cor="darkslategrey"/>
           <Navegar texto="Teste" destino="/teste" cor="seagreen"/>
           <Navegar texto="Jsx" destino="/jsx" cor="firebrick"/>
        </div>
    )
}