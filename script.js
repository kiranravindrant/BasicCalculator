
    function bclick(val)
    {   
     
    document.getElementById("screen").value+=val;
    }


    function clearscr()
    {
 
    
        document.getElementById("screen").value=" ";
    }

function Equalclick ()
{

let text=document.getElementById("screen").value
var result=eval(text) ;                                         //eval is inbuilt library func
document.getElementById("screen").value=result;

}