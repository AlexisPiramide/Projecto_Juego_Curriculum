import Rama from "./Rama";


export default interface RamaRepository {
    getRamas(): Promise<Rama[]>;
}
