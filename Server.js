import ex from "express";
import cors from "cors";
import bp from "body-parser";
import mongoose from "mongoose";
import Routes from "./Routes/Routes.js";

const app = ex()

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))
app.use(cors())

mongoose.connect('mongodb://localhost:27017/tookit-demo')
app.use(Routes)


app.listen(2002, () => {
    console.log('Server is running on port 2002')
})