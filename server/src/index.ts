import express from "express";
import dotenv from "dotenv"
import cors from "cors";
dotenv.config();
import "./models";

const app = express();
app.use(express.json())
app.use(cors());

const PORT = process.env.DEV_PORT;

app.use(`/api/v${process.env.API_VER}/games`, require("./routes/games"));

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));