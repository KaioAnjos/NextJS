import Cliente from "../../core/Cliente";
import ClienteRepostorio from "../../core/ClienteRepositorio";
import firebase from "../config";

export default class ColecaoCliente implements ClienteRepostorio {
  conversor = {
    toFirestore(cliente: Cliente) {
      return {
        nome: cliente.Tnome,
        idede: cliente.Tidade,
      };
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot,
      options: firebase.firestore.SnapshotOptions
    ) {
      const dados = snapshot.data(options);
      return new Cliente(dados.nome, dados.idade, snapshot.id);
    },
  };

  async salvar(cliente: Cliente): Promise<Cliente> {
    if (cliente?.Tid) {
      await this.colecao().doc(cliente.Tid).set(cliente);
      return cliente;
    } else {
      const docRef = await this.colecao().add(cliente);
      const doc = docRef.get();
      return doc.data();
    }
  }

  async excluir(cliente: Cliente): Promise<void> {
    return this.colecao().doc(cliente.Tid).delete();
  }

  async obterTodos(): Promise<Cliente[]> {
    const query = await this.colecao().get();
    return query.docs.map(doc => doc.data()) ?? []
  }

  private colecao() {

    return firebase.firestore.arguments("clientes").withConverter(this.conversor);

  }
}
