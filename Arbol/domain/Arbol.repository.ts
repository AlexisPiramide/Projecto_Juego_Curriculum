import Arbol from "./Arbol";

export default interface ArbolRepository {
    generarArbol(): Promise<Arbol>;
}
