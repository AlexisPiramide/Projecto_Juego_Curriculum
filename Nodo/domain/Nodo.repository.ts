import Nodo from "./Nodo";


export default interface NodoRepository {
    getNodos(): Promise<Nodo[]>;
}
