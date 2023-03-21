const express = require('express');
const db = require('./db/databaseConnection');

const storesRoutes = require("./routes/stores")
const categoriesRoutes = require("./routes/categories")

const app = express();
app.use(express.json());

app.use('/stores', storesRoutes );

app.use('/categories', categoriesRoutes );


app.listen(3000, ()=>{
    console.log("server is working...")
})