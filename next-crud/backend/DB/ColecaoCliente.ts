import Cliente from "../../core/Cliente";
import ClienteRepostorio from "../../core/ClienteRepositorio";
import firebase from "firebase/firestore";
import firestore from "../config"

export default class ColecaoCliente implements ClienteRepostorio {
  conversor = {
    toFirestore(cliente: Cliente) {
      return {
        nome: cliente.Tnome,
        idede: cliente.Tidade,
      };
    },
    fromFirestore(
      snapshot: firebase.QueryDocumentSnapshot,
      options: firebase.SnapshotOptions
    ) {
        const dados = snapshot.data(options)
        return new Cliente(dados.nome, dados.idade, snapshot.id)
    },
  };

  async salvar(cliente: Cliente): Promise<Cliente> {
    return null;
  }

  async excluir(cliente: Cliente): Promise<void> {
    return null;
  }

  async obterTodos(): Promise<Cliente[]> {
    return null;
  }

  private colecao(){
    return firestore.collection('clientes').withConverter(this.conversor)
  }
}
