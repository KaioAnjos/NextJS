import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import ColecaoCliente from "../../backend/DB/ColecaoCliente";
import Cliente from "../../core/Cliente";
import ClienteRepostorio from "../../core/ClienteRepositorio";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
export default function Home() {
  const repo: ClienteRepostorio = new ColecaoCliente();

  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);
  useEffect(obterTodos, []);
   function obterTodos(){
    repo.obterTodos().then(() => {
      setClientes(clientes)
      setVisivel("tabela");
    });
   }

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel("form");
  }
  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir.... ${cliente.Tnome}`);
  }

  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente)
    obterTodos();
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    setVisivel("form");
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout titulo="Cadastro Simples">
        {visivel === "tabela" ? (
          <>
            <Botao className="mb-4" cor="green" onClick={novoCliente}>
              Novo Cliente
            </Botao>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel("tabela")}
          />
        )}
      </Layout>
    </div>
  );
}
