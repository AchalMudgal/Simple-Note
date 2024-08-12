import express from "express";
import { createServer } from 'http';
import { PORT } from "./common/configs.js";
import cors from "cors";
import helmet from "helmet";
import router from "./routes/routes.js";
import { connectDB } from "./common/db.js";
const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(helmet());

app.use("/api/v1",router);

const server = createServer(app);
server.listen(PORT,()=>{
  console.log(`Server running on http://localhost:${PORT}`);
});