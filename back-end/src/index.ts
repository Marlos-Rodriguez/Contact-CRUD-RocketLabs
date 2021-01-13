import express, {Application} from "express"
import cors from "cors"

import contactRouter from "./routes/contactRoutes"

import connectDB from "./config/db"

//Create Server
const app: Application = express();

connectDB();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Puerto de la app
const PORT:number = Number(process.env.PORT) || 4000;

app.use('/contacts', contactRouter);

//Empezar el servidor
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server on PORT: ${PORT}`);
});
