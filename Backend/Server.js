const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./Config/DB");
const commentRoutes = require("./Routes/commentRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect DB
connectDB();

// Routes
app.use("/api/comments", commentRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
