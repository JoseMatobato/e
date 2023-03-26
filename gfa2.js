function add(){
    var num1=document.getElementById("val1").value
    var num2=document.getElementById("val2").value
    ans=parseInt(num1)+parseInt(num2);
    document.getElementById("value").innerHTML="The sum of "+num1+" and "+num2+" is "+ans+".";
}

function sub(){
    var num1=document.getElementById("val1").value
    var num2=document.getElementById("val2").value
    ans=parseInt(num1)-parseInt(num2);
    document.getElementById("value").innerHTML="The difference of "+num1+" and "+num2+" is "+ans+".";
}

function mult(){
    var num1=document.getElementById("val1").value
    var num2=document.getElementById("val2").value
    ans=parseInt(num1)*parseInt(num2);
    document.getElementById("value").innerHTML="The product of "+num1+" and "+num2+" is "+ans+".";
}

function div(){
    var num1=document.getElementById("val1").value
    var num2=document.getElementById("val2").value
    ans=parseInt(num1)/parseInt(num2);
    document.getElementById("value").innerHTML="The quotient of "+num1+" and "+num2+" is "+ans+".";
}
