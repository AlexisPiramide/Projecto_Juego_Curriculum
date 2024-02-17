import NodeRepository from "./../../domain/Nodo.repository";
import executeQuery from "../../../context/db/conection";
import Nodo from "../../domain/Nodo";

export default class NodeRepositorySQL implements NodeRepository {
    async getNodos(): Promise<Nodo[]> {
        const query = `SELECT * FROM ramas`;
        const result = await executeQuery(query);
        
        return result;
    }
}