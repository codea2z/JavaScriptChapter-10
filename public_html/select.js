/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init()
{
    var panel = document.getElementById("panel");
    var list = document.getElementById("cityList");
    
    var elem = list.options.selectedIndex;
    var city = list.options[elem].value;
    panel.innerHTML += "Selected: " + city + " - Index: " + elem;
}

document.addEventListener("DOMContentLoaded", init, false);

