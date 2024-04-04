
function suma()
{
    var a, b , s;
    a=parseInt(prompt("a: "));
    b=parseInt(prompt("b: "));
    s=a+b;

    alert(s);
}

function fibo(){

    var n, a, b , c;

n= parseInt(prompt("n: "));
a= -1;
b= 1;

    for(i=1;i<=n;i++){
        c=a+b;
        a=b;
        b=c;
        document.write(c+",");
    }

}