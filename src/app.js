import express from "express";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js"
import incidenceRoutes from "./routes/incidence.routes.js"
import { validateCORS } from "./middlewares/middleware.js";
import morgan from "morgan";

const app = express();

app.use(morgan('dev'))
app.use(express.json());
app.use(validateCORS);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use('/api/incidence', incidenceRoutes)

app.use((req, res, next) => {
  res.status(404).json({ message: "endpoint not found" });
});

export default app;
