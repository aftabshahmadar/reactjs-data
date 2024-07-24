var myvar;
function mainfunction() 
{
    myvar = setTimeout("display()",2000);
}

function display()
{
    document.getElementById("loader").style="display:none !important";
    document.getElementById("main-content").style="display:block !important";
 
}
