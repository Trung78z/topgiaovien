import { createServer } from "http";
import { configDotenv } from "dotenv";
configDotenv();
import app from "./app";

const PORT = process.env.PORT || 8080;

const server = createServer(app);
server.listen(PORT, function () {
  console.log("Server is running on http://localhost:" + PORT);
});
