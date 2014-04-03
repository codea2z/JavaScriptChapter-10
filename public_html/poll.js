/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function poll()
{
    var i, isOK, summary = "";
    var form = document.getElementById("pizza");
    
    for (i = 0; i < form.Topping.length; i++)
    {
        if (form.Topping[i].checked)
        {
            summary += form.Topping[i].value + " ";
        }
    }
    isOK = confirm("Submit these choices?\n" + summary);
    if (isOK)
    {
        form.submit();
    }
    else
    {
        return false; 
    }
}

function init()
{
    document.getElementById("pizza").Topping[0].checked = true;
    document.getElementById("btn").onclick = poll;
}

document.addEventListener("DOMContentLoaded", init, false);

