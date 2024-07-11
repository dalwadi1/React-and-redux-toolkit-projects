import ex from "express";
import cors from "cors";
import bp from "body-parser";
import mongoose from "mongoose";
import router from "./Routes/Routes.js";


const app = ex()

app.use(cors())

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use(router)
mongoose.connect('mongodb://127.0.0.1:27017/tookit-demo')


app.listen(4000, () => {
    console.log('ok');
})