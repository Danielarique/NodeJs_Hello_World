/*const http = require('http');*/
//const url = require('url');
const express = require('express');
const phone = require('phone');
const bodyParser = require('body-parser');
const apiV1 = require('./routes/v1');
//var operations = require("./operations"); /*IMPORTACION TOTAL (SE IMPORTAN TODAS LAS FUNCIONES DEL ARCHIVO)*/ 
const { multiplication } = require("./operations");
/*IMPORTACIÓN PARCIAL (SE PUEDEN IMPORTAR ALGUNAS FUNCIONES Y NO TODAS,
  SE PONE EL NOMBRE DE LA O LAS FUNCIONES) */
const PORT = 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

apiV1(app);

/*app.get("/", (req, res) => {
    res.status(200).send("<html><head> <meta charset=\"utf-8\" /> </head>  <body>HoOME 😜</body></html>");
});


app.get("/info", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify({ version: "0.0.1", appName: "Curso Node.js" }));
});

app.get("/detail", (req, res) => {
    res.status(200).send("Detail");
});

app.post('/login', (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;

    if (username === "daniela" && password === "123456") {
        res.send({ status: "OK" });
    } else {
        res.status(401).send("Acceso denegado");
    }

})

app.get("/phone", (req, res) => {
    try {

        const { value, country } = req.query;
        const result = phone(value, country.toUpperCase());
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify(result));
    } catch (e) {
        res.writeHead(400, { "Content-Type": "text/html" });
        res.write(e.message);
    }
});
*/



app.use((req, res) => {
    res.status(404).send("NOT FOUND");
})

app.listen(PORT, () => {
    console.log("running on " + PORT);
});
/*const server = http.createServer((req, res) => {

    const urlData = url.parse(req.url, true);
    const path = urlData.pathname;
    const query = urlData.query;
    console.log("query", query.value, query.country)
    switch (path) {
        case "/":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("<html><head> <meta charset=\"utf-8\" /> </head>  <body>HOME 😜</body></html>");
            break;
        case "/info":
            res.writeHead(200, { "Content-Type": "application/json" });
            res.write(JSON.stringify({ version: "0.0.1", appName: "Curso Node.js" }));
            break;
        case "/detail":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write("<html><head> <meta charset=\"utf-8\" /> </head>  <body>DETAIL 😜</body></html>");
            break;

        case "/phone":
            try {
                const result = phone(query.value, query.country.toUpperCase());
                res.writeHead(200, { "Content-Type": "application/json" });
                res.write(JSON.stringify(result));
            } catch (e) {
                res.writeHead(400, { "Content-Type": "text/html" });
                res.write(e.message);
            }
            break;

        default:
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write("<html><head> <meta charset=\"utf-8\" /> </head>  <body>NOT FOUND 😜</body></html>");


    }


    res.end();

});*/

//console.log("addition", operations.addtion(4, 5));
//console.log("addition", operations.multiplication(4, 5)); /*IMPORTACION PARCIAL */
//console.log("MULTIPLICATION", multiplication(4, 6));
//server.listen(PORT);