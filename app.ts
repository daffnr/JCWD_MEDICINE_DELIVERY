import express, {Application} from "express";
import dotenv from "dotenv";
import drugRouter from "./src/router/drugRouter.ts";

dotenv.config();
const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", drugRouter);
app.listen(PORT, () =>
console.log("Listening on port " +PORT));