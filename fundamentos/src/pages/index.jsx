import Navegar from "../components/Navegar"
export default function Inicio(){
    function nova(){
    window.open("/teclado", "_blank", "location=yes")
}
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
           <Navegar texto= "Teste" destino="/teclado" cor="blue"/>
           <input type="button" value="Nova" onClick={() => nova()} />
        </div>
    )
}