const express = require("express");
const cors = require("cors");
const adaptRoutes = require("./routes/adapt");

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Use the routes
app.use("/adapt", adaptRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
