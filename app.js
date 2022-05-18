// const express = require("express");
 
// const app = express();
 
// app.use(express.static(__dirname + "/public"));
 
// app.use("/", function(request, response){
     
//     response.send("<h1>Главная</h1>");
// });
 
// app.listen(3000);

// http://localhost:3000/about.html


// Дополнительно мы можем изменить путь к каталогу статических файлов:
const express = require("express");
 
const app = express();
 
app.use("/static", express.static(__dirname + "/public"));
 
app.use("/", function(request, response){
     
    response.send("<h1>Главная страница</h1>");
});
 
app.listen(3000);

// http://localhost:3000/static/about.html