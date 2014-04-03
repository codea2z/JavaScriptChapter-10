/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var panel, field, saved;

function update()
{
    panel.innerHTML = saved + " changed to " + field.value + "<br>";
    saved = field.value;
}

function wipe()
{
    panel.innerHTML = "<br>";
}

function init()
{
    panel = document.getElementById("panel");
    field = document.getElementById("txt");
    saved = field.value;
    var form = document.getElementById("lang");
    
    form.onreset = wipe;
    form.onchange = update;
    wipe();
}

document.addEventListener("DOMContentLoaded", init, false);

