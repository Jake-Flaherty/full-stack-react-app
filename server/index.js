const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({message: "Hello from the backend!"});
});

app.listen(PORT, () => {
    console.log('Wahoo! It works!');
});