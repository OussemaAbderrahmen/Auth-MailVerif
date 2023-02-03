import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import passwordResetRoutes from "./routes/passwordReset.js";
import bodyparser from "body-parser";
import mongoose from "mongoose";

const app = express();

app.use(cors());
// middlewares
app.use(express.json());
app.use(bodyparser.json({ limit: "30mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }));

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/password-reset", passwordResetRoutes);



// database connection

const PORT = process.env.PORT || 8080;

const CONNECTION_URL =
  "mongodb+srv://oussemaAbderrahmen:oussemaAbderrahmen@cluster0.t9lx6dz.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
  )
  .catch((error) => console.log(error.message));
