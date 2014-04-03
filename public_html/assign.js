/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    var panel = document.getElementById("panel");
    panel.innerHTML += "Send Book Data";
    
    var form = document.getElementById("book");
    form.action = "echo.pl";
    form.method = "POST";
    
    var title = document.getElementById("title");
    title.size = "30";
    title.name = "Book Title";
    title.value = "JavaScript in easy steps";
    
    var author = document.getElementById("author");
    author.size = "30";
    author.name = "By Author";
    author.value = "Mike McGrath";
}

document.addEventListener("DOMContentLoaded", init, false)

