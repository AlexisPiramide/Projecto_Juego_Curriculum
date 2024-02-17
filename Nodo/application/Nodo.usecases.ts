import Nodo from "../domain/Nodo.ts";
import NodoRepositorySQL from "../infraestructure/db/Nodo.repositorySQL.ts";

export default class NodeUseCases {
    constructor(private NodoRepository: NodoRepositorySQL) { }


    async getNodos(): Promise<Nodo[]> {
        return await this.NodoRepository.getNodos();
    }
}