import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import routerarbol from "./Arbol/infraestructure/rest/Arbol.rest";

dotenv.config();
const port = process.env.PORT;
const allowedOrigins = ["http://localhost:5173"];
const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

const app = express();
app.use(express.json());
app.use(cors(options));
app.use("/api/arbol", routerarbol);


app.listen(port, () => {    
    console.log( `server started at http://localhost:${port}`);
}); 