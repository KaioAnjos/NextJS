export default class Cliente {
  #Tid: string;
  #Tnome: string;
  #Tidade: number;

  constructor(nome: string, idade: number, id: string = null) {
    this.#Tnome = nome;
    this.#Tidade = idade;
    this.#Tid = id;
  }

  static vazio() {
    return new Cliente("", 0);
  }

  get id() {
    return this.id;
  }

  get nome() {
    return this.nome;
  }

  get idade() {
    return this.idade;
  }
}
