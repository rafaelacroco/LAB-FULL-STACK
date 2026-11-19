npm init -y                                        # cria o package.json
npm install express body-parser ejs mongodb@4.12  # baixa os pacotes da prova

//      método  caminho          função que atende
app.post("/cadastrar", function (requisicao, resposta) {
    // requisicao = o que CHEGOU (dados do formulário)
    // resposta   = o que o servidor DEVOLVE (uma página)
});

GET /cadastrar e POST /cadastrar são rotas diferentes, mesmo com o mesmo caminho.

Gravar e buscar no banco (resumo)
Gravar: colecao.insertOne(dados, function (err) { ... })
Buscar: colecao.find(filtro).toArray(function (err, items) { ... })
Atualizar: await colecao.updateOne(filtro, { $set: { campo: novoValor } })

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));   // lê formulários HTML
app.use(bodyParser.json());                            // lê JSON


resposta.send("texto")	Devolve um texto simples
resposta.redirect("pagina.html")	Manda o navegador ir para outra página
resposta.render("arquivo", { dados })	Monta uma página EJS com os dados (Bloco 4)


action	Para qual rota os dados vão
method	Como vão: get (na URL) ou post (no corpo)
name	O nome do dado. É ele que vira requisicao.body.nome ou requisicao.query.nome no servidor. Sem name, o campo não é enviado.
placeholder	Texto cinza de dica dentro do campo
required	O navegador não deixa enviar com o campo vazio

type	O que mostra	Detalhe
text	Campo de texto comum	Aceita qualquer coisa
email	Campo de e-mail	O navegador recusa enviar sem @
password	Campo de senha	Mostra bolinhas no lugar das letras
date	Calendário para escolher a data	Chega no servidor como texto no formato 2004-05-10 (ano-mês-dia)
submit	Botão que envia o formulário	O value é o texto do botão


body {
    display: flex;
    flex-direction: column;   /* um elemento embaixo do outro */
    align-items: center;      /* centraliza na horizontal */
}

.cartao {
    width: 320px;
    padding: 20px;            /* espaço DENTRO da borda */
    margin: 10px;             /* espaço FORA da borda */
    border-radius: 12px;      /* bordas arredondadas */
    background-color: white;
}


O que centralizar	Como
Texto	text-align: center;
Uma caixa com largura definida	margin: 0 auto;
Vários elementos	No pai: display: flex; flex-direction: column; align-items: center;


<%= variavel %>	Mostra o valor na página	<h2><%= mensagem %></h2>
<% codigo %>	Executa JavaScript, sem mostrar nada	<% if (...) { %> e <% for (...) { %>


    Gravar (Create): insertOne
servidor.js
Copiar
var data = {
    db_nome: requisicao.body.nome,
    db_email: requisicao.body.email
};

leitores.insertOne(data, function (err) {
    if (err) {
        resposta.render("resposta", { mensagem: "Erro ao cadastrar!" });
    } else {
        resposta.render("resposta", { mensagem: "Cadastrado com sucesso!" });
    }
});


Buscar (Read): find + toArray
servidor.js
Copiar
var filtro = { db_email: requisicao.query.email };

leitores.find(filtro).toArray(function (err, items) {
    // items é SEMPRE um array: [] se não achou nada
    if (items.length == 0) {
        resposta.render("resposta", { mensagem: "Nada encontrado!" });
    } else {
        resposta.render("lista", { leitores: items });
    }
});


mkdir biblioteca
cd biblioteca
npm init -y
npm install express body-parser ejs mongodb@4.12
mkdir public views




// ===== 1. PACOTES =====
var http = require("http");
var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");

// ===== 2. CONFIGURAÇÃO DO EXPRESS =====
var app = express();
app.use(express.static("./public"));                  // arquivos fixos: html, css, imagens
app.use(bodyParser.urlencoded({ extended: false }));  // lê os dados do POST (formulário)
app.use(bodyParser.json());
app.set("view engine", "ejs");                        // páginas dinâmicas com EJS
app.set("views", "./views");                          // pasta onde ficam os .ejs

// ===== 3. CONEXÃO COM O MONGODB (Compass local) =====
const MongoClient = mongodb.MongoClient;
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri, { useNewUrlParser: true });

var dbo = client.db("biblioteca");            // banco
var leitores = dbo.collection("leitores");    // collection

// ===== 4. ROTAS =====

// página inicial (o express.static já abre o public/index.html em "/";
// esta rota serve para quando a página tiver outro nome, como home.html)
app.get("/", function (requisicao, resposta) {
    resposta.redirect("index.html");
});

// CREATE: cadastrar leitor (POST, dados no corpo)
app.post("/cadastrar", function (requisicao, resposta) {
    var data = {
        db_nome: requisicao.body.nome,
        db_email: requisicao.body.email,
        db_senha: requisicao.body.senha,
        db_nascimento: requisicao.body.nascimento
    };

    leitores.insertOne(data, function (err) {
        if (err) {
            console.log(err);
            resposta.render("resposta", { mensagem: "Erro ao cadastrar leitor!" });
        } else {
            resposta.render("resposta", { mensagem: "Leitor " + data.db_nome + " cadastrado com sucesso!" });
        }
    });
});

// READ: listar todos os leitores (GET, sem filtro)
app.get("/listar", function (requisicao, resposta) {
    leitores.find({}).toArray(function (err, items) {
        if (err) {
            resposta.render("resposta", { mensagem: "Erro ao buscar leitores!" });
        } else {
            resposta.render("lista", { leitores: items });
        }
    });
});

// READ: buscar por e-mail (GET, dado na URL: /buscar?email=...)
app.get("/buscar", function (requisicao, resposta) {
    var filtro = { db_email: requisicao.query.email };

    leitores.find(filtro).toArray(function (err, items) {
        if (err) {
            resposta.render("resposta", { mensagem: "Erro ao buscar leitor!" });
        } else {
            resposta.render("lista", { leitores: items });
        }
    });
});

// READ: login (POST, confere e-mail e senha)
app.post("/login", function (requisicao, resposta) {
    var filtro = { db_email: requisicao.body.email, db_senha: requisicao.body.senha };

    leitores.find(filtro).toArray(function (err, items) {
        if (err) {
            resposta.render("resposta", { mensagem: "Erro ao fazer login!" });
        } else if (items.length == 0) {
            resposta.render("resposta", { mensagem: "E-mail ou senha incorretos!" });
        } else {
            resposta.render("resposta", { mensagem: "Bem-vindo(a), " + items[0].db_nome + "!" });
        }
    });
});

// UPDATE: trocar a senha (POST, confere a senha atual)
app.post("/atualizar", async function (requisicao, resposta) {
    try {
        var filtro = { db_email: requisicao.body.email, db_senha: requisicao.body.senha };
        var novosDados = { $set: { db_senha: requisicao.body.novasenha } };

        const result = await leitores.updateOne(filtro, novosDados);

        if (result.matchedCount == 0) {
            resposta.render("resposta", { mensagem: "E-mail ou senha atual incorretos!" });
        } else {
            resposta.render("resposta", { mensagem: "Senha atualizada com sucesso!" });
        }
    } catch (err) {
        console.log(err);
        resposta.render("resposta", { mensagem: "Erro ao atualizar!" });
    }
});

// ===== 5. LIGAR O SERVIDOR =====
var server = http.createServer(app);
server.listen(3000);
console.log("Servidor rodando em http://localhost:3000");


<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Biblioteca</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <h1>Biblioteca</h1>

    <!-- CREATE -->
    <form class="cartao" action="/cadastrar" method="post">
        <h2>Cadastrar leitor</h2>
        <input type="text" name="nome" placeholder="Nome" required>
        <input type="email" name="email" placeholder="E-mail" required>
        <input type="password" name="senha" placeholder="Senha" required>
        <label>Nascimento <input type="date" name="nascimento"></label>
        <input type="submit" value="Cadastrar">
    </form>

    <!-- READ (GET) -->
    <form class="cartao" action="/buscar" method="get">
        <h2>Buscar por e-mail</h2>
        <input type="email" name="email" placeholder="E-mail" required>
        <input type="submit" value="Buscar">
        <a href="/listar">Ver todos os leitores</a>
    </form>

    <!-- READ (POST) -->
    <form class="cartao" action="/login" method="post">
        <h2>Login</h2>
        <input type="email" name="email" placeholder="E-mail" required>
        <input type="password" name="senha" placeholder="Senha" required>
        <input type="submit" value="Entrar">
    </form>

    <!-- UPDATE -->
    <form class="cartao" action="/atualizar" method="post">
        <h2>Trocar senha</h2>
        <input type="email" name="email" placeholder="E-mail" required>
        <input type="password" name="senha" placeholder="Senha atual" required>
        <input type="password" name="novasenha" placeholder="Nova senha" required>
        <input type="submit" value="Atualizar">
    </form>
</body>
</html>

body {
    font-family: Arial, sans-serif;
    background-color: #eef2f7;
    display: flex;
    flex-direction: column;
    align-items: center;      /* centraliza tudo na horizontal */
    margin: 0;
    padding: 20px;
}

.cartao {
    background-color: white;
    width: 320px;
    padding: 20px;            /* espaço DENTRO do cartão */
    margin: 10px;             /* espaço FORA do cartão */
    border-radius: 12px;      /* bordas arredondadas */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 10px;                /* espaço entre os campos */
}

input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 6px;
}

input[type="submit"] {
    background-color: #2a78d6;
    color: white;
    border: none;
    cursor: pointer;
}


<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Resposta</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <div class="cartao">
        <h2><%= mensagem %></h2>
        <a href="/">Voltar</a>
    </div>
</body>
</html>


<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Leitores</title>
    <link rel="stylesheet" href="estilo.css">
</head>
<body>
    <div class="cartao">
        <h2>Leitores encontrados: <%= leitores.length %></h2>

        <% if (leitores.length == 0) { %>
            <p>Nenhum leitor encontrado.</p>
        <% } %>

        <% for (var i = 0; i < leitores.length; i++) { %>
            <p>
                <strong><%= leitores[i].db_nome %></strong><br>
                <%= leitores[i].db_email %> · nascimento: <%= leitores[i].db_nascimento %>
            </p>
        <% } %>

        <a href="/">Voltar</a>
    </div>
</body>
</html>


//erros 
</head>
rovaErros comuns e checklist
Erro	Causa mais comum	Correção
Cannot GET /cadastrar	O formulário está com method="get", mas a rota é app.post (ou o contrário)	Deixe o method do form igual ao app.get / app.post
Cannot read properties of undefined (reading 'nome')	Faltou o body-parser, então requisicao.body não existe	Adicione as duas linhas do bodyParser antes das rotas
O dado chega undefined	O name do input é diferente do que o servidor lê	name="email" no HTML → requisicao.body.email no servidor
Failed to lookup view "resposta"	O .ejs não está na pasta views ou o nome está diferente	Confira a pasta e o nome, sem .ejs no render
mensagem is not defined dentro do EJS	O render não mandou essa variável	Cada <%= x %> precisa de uma chave x no render
ECONNREFUSED ::1:27017	O Node tentou localhost pelo IPv6	Use mongodb://127.0.0.1:27017
ECONNREFUSED 127.0.0.1:27017	O MongoDB não está rodando	Abra o Compass e conecte, ou inicie o serviço do MongoDB
Cannot find module 'express'	Os pacotes não foram instalados nesta pasta	npm install express body-parser ejs mongodb@4.12 dentro da pasta do projeto
EADDRINUSE :::3000	Outro servidor já está usando a porta	Feche o terminal antigo (Ctrl + C) ou troque a porta
O callback do insertOne nunca roda	Pacote mongodb na versão 5 ou mais nova	Reinstale com npm install mongodb@4.12
A página carrega sem estilo	O CSS não está em public ou faltou o express.static	app.use(express.static("./public")) e <link href="estilo.css"></link>