import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ConnectBD from "./src/config/db.js";
import errorHandler from "./src/middleware/errorHandler.js";
import useRoute from "./src/routes/user.route.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//Database Connection
const uri = process.env.MONGO_URI;
ConnectBD(uri);

//all routes

app.use("/api/v1/user", useRoute);

//global error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
