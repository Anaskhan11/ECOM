import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import Connection from "./config/DBConnection.js";
import authRoutes from "./routes/authRoutes.js";
import categoryRoute from "./routes/categoryRoute.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";

const app = express();

dotenv.config({ path: "config/Config.env" });
Connection();

app.use(
  cors({
    origin: ["https://deploy-mern-lwhq.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);
//app.use(bodyParser.json());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on Port ${process.env.PORT}`.bgCyan.white);
});
