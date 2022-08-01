import Cliente from "../../core/Cliente";
interface TabelaProps {
  clientes: Cliente[];
}
export default function Tabela(props: TabelaProps) {
  function rederizarCabecalho() {
    return (
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Idade</th>
      </tr>
    );
  }
  function rederizardados(){
    return props.clientes?.map((cliente, i) => {
        return(
            <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nome}</td>
                <td>{cliente.idade}</td>
            </tr>
        )
    } )
  }

  return( 
  <table className="w-full">
    <thead className="bg-gradient-to-r from-purple-500 to-purple-900">
    {rederizarCabecalho()}
    </thead>
    <tbody>
        {rederizardados()}
    </tbody>
  </table>
  );
}
