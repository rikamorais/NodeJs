// npm install express

const express = require('express');
const app = express();
const port = 3000;

function getHandler(req, res){
    res.send("Hello World!");
}
    app.get("/", getHandler);

    app.get("/novocaminho", getHandler, (req, res)=>{
        res.send("Hello Novo Caminho!");
    });

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
