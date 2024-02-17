import Nodo from '../../Nodo/domain/Nodo';

export default interface Rama  extends Nodo{
    talento: string;
    nombre: string;
    bono: string;
    padre?: Nodo | Rama;
    hijo?: Rama;
}