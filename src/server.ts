import http from "http";
import app from "./app.js"; // ✅ `.js` extension required
import { ENV } from "./config/env.js";

const server = http.createServer(app);

server.listen(ENV.PORT, () => {
  console.log(`🚀 Server running at http://localhost:${ENV.PORT}`);
});
