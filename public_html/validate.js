/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function validate()
{
    if (this.elements["Name"].value === "")
    {
        alert("Please enter your name");
        return false;
    }
    if ((this.elements["Email"].value.indexOf("@") === -1)
            || (this.elements["Email"].value.indexOf(".") === -1))
    {
        alert("Please enter a valid email address"); 
        return false;
    }
}

function init()
{
    panel = document.getElementById("panel");
    panel.innerHTML = "Please enter your name and email address.";
    
    var form = document.getElementById("contact");
    form.onsubmit = validate;
}

document.addEventListener("DOMContentLoaded", init, false);

