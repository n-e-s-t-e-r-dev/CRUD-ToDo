
const express = require('express');
const db = require("./utils/databaseToDo");
const Task = require('./models/tasks.models');
const TaskRouter = require('./routes/tasks.route');

Task;

const PORT = 8000;

db.authenticate()
    .then(() => console.log("Autentificacion exitosa Iam"))
    .catch((error) => console.log(error));

db.sync()
    .then(() => {
        console.log("base de datos sincronizada");
    })
    .catch((error) => {
        console.log(error);
    });


const app = express();

app.use(express.json());

app.use(TaskRouter)
app.get('/', (req, res) => {
    res.status(200).json({ mesagge: "Bienvenido Conectado al server 8000" });
});

app.listen(PORT, () => {
    console.log(`servidor corriendo en ${PORT}`);
});

