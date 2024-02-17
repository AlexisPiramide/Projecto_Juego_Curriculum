import express, { Request, Response } from "express";
import ArbolUseCases from "../../application/Arbol.usecases";
const router = express.Router();

import NodeUseCases from "../../../Nodo/application/Nodo.usecases";
import RamaUseCases from "../../../Rama/application/Rama.usecases";
import NodoRepository from "../../../Nodo/domain/Nodo.repository";
import NodoRepositorySQL from "../../../Nodo/infraestructure/db/Nodo.repositorySQL";
import RamaRepository from "../../../Rama/domain/Rama.repository";
import RamaRepositorySQL from "../../../Rama/infraestructure/db/Rama.repositorySQL";

const nodoRepository: NodoRepository = new NodoRepositorySQL();
const nodeUseCases = new NodeUseCases(nodoRepository);

const ramaRepository: RamaRepository = new RamaRepositorySQL();
const ramaUseCases = new RamaUseCases(ramaRepository);

const arbolUseCases = new ArbolUseCases(nodeUseCases, ramaUseCases);


router.get("/arbol", async (req: Request, res: Response) => {
    const result = await arbolUseCases.generarArbol();

    res.json(result); 
});


export default router;