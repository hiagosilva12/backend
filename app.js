const Express = require("express");
const app = Express();
const db = require("./db/connection");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(Express.json());

// db connection
db.authenticate()
  .then(() => console.log("Conectou ao banco de dados"))
  .catch((err) => {
    console.log("Ocorreu um erro ao conectar", err);
  });

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/accounts", require("./routes/create-accounts"));
