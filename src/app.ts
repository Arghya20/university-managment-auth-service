import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();
const port = 5000;

app.use(cors());

// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Testing
app.get("/", (req: Request, res: Response) => {
  res.send("Our App is Working File 👍");
});

export default app;
