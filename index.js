const express = require("express")
const app = express()
const port = 8080;
const cors = require("cors")
const cookieParser = require("cookie-parser");
const dbConnect = require("./DB/db")
const router = require("./routes/authRoutes")
const corsOption = {
    origin : "http://localhost:5173",
    methods: "GET, POST, DELETE, PUT, PATCH, HEAD",
    credentials: true,
}
app.use("*", cors(corsOption));
app.use(cookieParser());
app.use(express.json());
app.use(express.text());
app.use("/api/user/", router);
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
})

dbConnect()