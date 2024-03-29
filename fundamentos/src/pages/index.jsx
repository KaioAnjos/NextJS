import Navegar from "../components/Navegar"
export default function Inicio(){
    function nova(){
    window.open("/teclado", "_blank", "location=no")
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
           <Navegar texto="Login Teste" destino="/LoginTeste" cor="Red"/>
           <Navegar texto="Login1" destino="/Login1" cor="#21d4fd" />
           <Navegar texto="Login2" destino="/login2" cor="#444444" />
        </div>
    )
}