import express from "express";
import cors from "cors";
import morgan from "morgan";

import categoryRouter from "./routers/category.router.js";
import productRouter from "./routers/product.router.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/categories", categoryRouter);
app.use("/api/products", productRouter);

export default app;