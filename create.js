var fs = require('fs');
const prompt = require('prompt-sync')();
console.log('Bem vindo ao create web project');

createWebProject();

function createWebProject(){
   
   console.log("Default names:\nindex.html\nstyle.css\nscript.js\nVocê pode renomear dps");
   nomeDoProjeto = prompt('Nome do Projeto ')
   caminho = `./${nomeDoProjeto}`
   if(fs.existsSync(caminho)) throw "Project Already Exist!";
   fs.mkdirSync(caminho);
   fs.appendFile(`${caminho}/index.html`,EMMET,function(err){if(err) throw err;console.log('Html criado')})
   fs.appendFile(`${caminho}/style.css`,RESET,function(err){if(err)throw err;console.log('Css Criado')})
   fs.appendFile(`${caminho}/script.js`,"// Js vazio",function(err){if(err)throw err;console.log('Js Criado')})
}










let EMMET = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href ="style.css">
</head>
<body>
    <script src="script.js"> </script>
</body>
</html>"
`
let RESET = `*{margin:0;padding:0;box-sizing:border-box;}`



