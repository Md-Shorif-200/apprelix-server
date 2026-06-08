import express from "express";
import cookieParser from "cookie-parser";
import routes from "./routes/index.js";
import config from "./config/index.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cookieParser(config.cookieSecret));
app.use(cors());

app.use("/api/v1", routes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(err.status || 500).json({
//     success: false,
//     message: err.message || "Internal Server Error",
//   });
// });


app.use(errorMiddleware);

export default app;
