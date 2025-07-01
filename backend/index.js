import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors"; // <-- import cors
import { mconn } from "./db.js";
import User from "./models/user_model.js";
import { router } from "./router/router.js";

dotenv.config();

const app = express(); 
const port = 9000;

app.use(cors("*")); // <-- enable CORS for all origins
app.use(bodyParser.json());
app.use("/",router)

await mconn()
  .then(() => {
    app.listen(port, () => {
      console.log(`✅ Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to database:", err);
  });
