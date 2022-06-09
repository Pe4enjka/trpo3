const express = require("express");
const app = express();
const port = 9988;




app.get("/", (req, res) => {
    res.json({
        message: "Pishchaniuk LAB_3 TRPO",
    });

});

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});