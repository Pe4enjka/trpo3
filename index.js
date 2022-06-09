const express = require("express");
const app = express();
const port = 9988;


// const Pool = require("pg").Pool;
// const pool = new Pool({
//   user: process.env.USER || "postgres",
//   host: "postgres",
//   database: process.env.POSTGRES_DB,
//   password: process.env.POSTGRES_PASSWORD,
//   port: 5432,
// });



app.get("/", (req, res) => {
    res.json({
        message: "Pishchaniuk LAB_3 TRPO",
    });

});

app.listen(port, () => {
    console.log(App running on port ${port}.);
});