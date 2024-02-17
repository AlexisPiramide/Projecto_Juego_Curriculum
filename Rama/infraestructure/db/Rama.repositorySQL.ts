import Rama from "../../domain/Rama";
import RamaRepository from "../../domain/Rama.repository";
import executeQuery from "../../../context/db/conection";

export default class PrestamoRepositorySQL implements RamaRepository {
    
    async getRamas(): Promise<Rama[]> {
        const query = `SELECT * FROM ramas`;
        const result = await executeQuery(query);
        
        return result;
    }

}