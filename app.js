import express from "express";
import bmwRoutes from "./routes/bmwRoutes.js";

const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


app.set("view engine", "ejs");


app.use("/", bmwRoutes);


app.listen(PORT, () => {
    console.log(`BMW Server Running at http://localhost:${PORT}`);
});