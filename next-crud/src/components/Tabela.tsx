import Cliente from "../../core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icones";
interface TabelaProps {
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}
setTimeout(() => {
  Tabela;
}, 1000);
export default function Tabela(props: TabelaProps) {
  const exibirAcoes = props.clienteExcluido || props.clienteSelecionado;

  function rederizarCabecalho() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {exibirAcoes ? <th className="p-4">Ações</th> : false}
      </tr>
    );
  }

  function rederizardados() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr
          key={cliente.Tid}
          className={`${i % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}
        >
          <td className="text-left p-4">{cliente.Tid}</td>
          <td className="text-left p-4">{cliente.Tnome}</td>
          <td className="text-left p-4">{cliente.Tidade}</td>
          {exibirAcoes ? rederizarAcao(cliente) : false}
        </tr>
      );
    });
  }

  function rederizarAcao(cliente: Cliente) {
    return (
      <td className={`flex justify-center`}>
        {props.clienteSelecionado ? (
          <button onClick={() => props.clienteSelecionado?.(cliente) }
            className={`
              flex justify-center items-center text-green-600 rounded-full hover:bg-purple-50 p-2 m-1
              `}
          >
            {IconeEdicao}
          </button>
        ) : (
          false
        )}
        {props.clienteExcluido ? (
          <button onClick={() => props.clienteExcluido?.(cliente) }
            className={`
      flex justify-center items-center text-red-600 rounded-full hover:bg-purple-50 p-2 m-1
      `}
          >
            {IconeLixo}
          </button>
        ) : (
          false
        )}
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className="bg-gradient-to-r from-purple-500 to-purple-900 text-gray-100">
        {rederizarCabecalho()}
      </thead>
      <tbody>{rederizardados()}</tbody>
    </table>
  );
}
