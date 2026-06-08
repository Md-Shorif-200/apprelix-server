import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";
import config from "./src/config/index.js";

const startServer = async () => {
  try {
    await connectDB();

    app.listen(config.port, () => {
      console.log(`Apprelix server is running on port ${config.port}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error);
    process.exit(1);
  }
};

startServer();
