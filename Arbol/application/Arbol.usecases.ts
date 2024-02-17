import NodeUseCases from "../../Nodo/application/Nodo.usecases.ts";
import RamaUseCases from "../../Rama/application/Rama.usecases.ts";
import Arbol from "../domain/Arbol.ts";
import Nodo from "../../Nodo/domain/Nodo.ts";

export default class ArbolUseCases {
    constructor(private nodeUseCases: NodeUseCases, private ramaUseCases: RamaUseCases) { }

    async generarArbol(): Promise<Arbol> {
        const nodos = await this.nodeUseCases.getNodos();
        const ramas = await this.ramaUseCases.getRamas();
        
        const ArrayArbol: Nodo [][] = [];
        const Array: Nodo[] = [];
        nodos.forEach(nodo => {

            Array.push(nodo);
            ramas.forEach(rama => {
                if (rama.padre === Array[Array.length - 1]) {
                    Array.push(rama);
                }
            });

            ArrayArbol.push(Array);
        });
    
        const Arbol = {
            Arbol: ArrayArbol
        };

        return Arbol
    }



}