const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/post');
const categoryRoute = require('./routes/category');
const multer = require('multer');



const dotenv = require('dotenv');
dotenv.config();
app.use(express.json());
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log('Connected to mongoDB!!!'))
    .catch((err) => console.log(err),);
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images")
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
})
const upload = multer({ storage: storage });
app.use("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("file has been uploaded");
})
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/post", postRoute);
app.use("/api/category", categoryRoute);


app.listen("5000", () => {
    console.log('server is running');
}) 