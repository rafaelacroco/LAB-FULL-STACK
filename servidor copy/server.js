const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORTA = 3000;

// 1. Configurações do Express, arquivos estáticos e EJS
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// 2. Conexão com o MongoDB no banco "faculdade"
const MONGO_URI = "mongodb://localhost:27017/faculdade";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Conectado ao MongoDB com sucesso!"))
  .catch((erro) => console.error("Erro ao conectar no MongoDB:", erro));

// 3. Schema e Model
const alunoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  ra: { type: String, required: true },
  curso: { type: String, required: true },
  criadoEm: { type: Date, default: Date.now }
});

const Aluno = mongoose.model("Aluno", alunoSchema);

// 4. Rota POST: cadastra um novo aluno no banco
app.post("/cadastrar", async (req, res) => {
  try {
    const { nome, ra, curso } = req.body;
    const novoAluno = await Aluno.create({ nome, ra, curso });
    res.render("sucesso", { aluno: novoAluno });
  } catch (erro) {
    console.error("Erro ao salvar no banco:", erro);
    res.status(500).send("Erro ao cadastrar os dados no banco.");
  }
});

// 5. Rota GET: lista todos os alunos OU filtra por Nome/RA
app.get("/alunos", async (req, res) => {
  try {
    // Pega o termo digitado na barra de busca (se existir)
    const busca = req.query.busca ? req.query.busca.trim() : "";

    let filtro = {};
    if (busca) {
      // $or busca no campo "nome" OU no campo "ra"
      // $regex com "i" ignora maiúsculas/minúsculas e aceita partes do texto
      filtro = {
        $or: [
          { nome: { $regex: busca, $options: "i" } },
          { ra: { $regex: busca, $options: "i" } }
        ]
      };
    }

    // Busca no MongoDB ordenando do mais recente para o mais antigo
    const listaAlunos = await Aluno.find(filtro).sort({ criadoEm: -1 });

    // Envia a lista e o termo buscado para a página views/alunos.ejs
    res.render("alunos", { alunos: listaAlunos, busca });
  } catch (erro) {
    console.error("Erro ao buscar no banco:", erro);
    res.status(500).send("Erro ao consultar os dados no banco.");
  }
});

// 6. Inicialização do servidor
app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`);
});