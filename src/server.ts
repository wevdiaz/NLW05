import express, { request, response } from "express";

const app = express();


app.get("/", (request, response) => {
    response.send("Olá! NLW05, bem vindo a Trilha Nodejs");
});

app.get("/jason", (request, response) => {
    response.json({
        message: "Retorno no formato JSON"
    });
});

app.post("/", (request, response) => {
    return response.json({
        message: "Usuário salvo com sucesso!"
    });
});

app.listen(3333, () => {
    console.log("Server is Working on port 3333");
});