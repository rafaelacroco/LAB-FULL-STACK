// você tem que instar o pacote ejs, express, colors as vezes e do mongo db
//lembre de atualizar o banco

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser'); //Importa o pacote que lê dados enviados pelo corpo (body) de formulários POST

var app = express();
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './views');

var server = http.createServer(app);
server.listen(80);
// conexão mongo -> npm install mongodb@4.12
var mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const uri = "mongodb://localhost:27017/";
const Blog = new MongoClient(uri, { useNewUrlParser: true });
Blog.connect();
var dbo = Blog.db("BLOG");
var posts = dbo.collection("posts");

// inicio do funcionamento

app.post("/cadastrar_post", function (req, resp) {
  var data = {
    db_titulo: req.body.titulo,
    db_resumo: req.body.resumo,
    db_conteudo: req.body.conteudo
  };
  posts.insertOne(data, function (err) {
    if (err) {
      console.log(err);
      resp.render('blog.ejs', { resposta: "Erro ao cadastrar post!", listaposts:[]});
    } else {
      resp.render('blog.ejs', { resposta: "Post cadastrado com sucesso!", listaposts:[] });
    }
  });
});
// encontrar post
app.post("/procurar_post", function (req, resp) {
  var data = {
    db_resumo: req.body.resumo,
  };//Define o filtro da busca

  //Busca todos os registros que batem com data e os transforma em uma lista (array) chamada ____
  posts.find(data).toArray(function (err, postss) {
    console.log(postss);
    if (postss.length == 0) {
      resp.render('blog.ejs', { resposta: "Post não encontrado!", listaposts:[] });
    } else if (err) {
      resp.render('blog.ejs', { resposta: "Erro ao procurar post!", listaposts:[]});
    } else {
      resp.render('blog.ejs', { resposta: "Post encontrado com sucesso!", listaposts: postss });
    }
  });
});

//Se a lista voltou com 0 elementos, significa que ninguém com esse login/senha existe no banco
//Se aconteceu algum erro técnico durante a consulta, devolve a mensagem de erro.
//e não houve erro e a lista tem pelo menos 1 item, o usuário foi encontrado e a tela de sucesso é renderizada.