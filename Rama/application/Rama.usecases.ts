import Rama from "../domain/Rama.ts";
import RamaRepositorySQL from "../infraestructure/db/Rama.repositorySQL.ts";

export default class RamaUseCases {
    constructor(private RamaRepository: RamaRepositorySQL) { }

    async getRamas(): Promise<Rama[]> {
        return await this.RamaRepository.getRamas();
    }
}