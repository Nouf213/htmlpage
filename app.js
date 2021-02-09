var fullname = 'nouf';
console.log("full name:"+fullname);
var age = prompt("enter your age");
console.log (age);

if (age>30) {
    alert("not student")
} else {
    alert("student")
};


var order=prompt("what you want to eat Dessert or launch?");

while (order !== "dessert")
 {
    order=prompt("what your want to eat desset or launch?");
}

var itemorder='';
if (order == "dessert") {
    itemorder = '<img src= "leverocks-dessert-menu-2019.jpg"/>';
} 
else if (order == "launch")
 { itemorder= '<img src= "lunch.jpg">';
    
} 

var numofdesserts=prompt ("what is the number of desserts ?");
var result='';
for (var i=0; i<numofdesserts;i++)
{
    result=result+itemorder;
}

document.write (result);
var yourname=prompt ("enter your name")
function printGreeting(nome)
{
    alert('greeting'+ nome)
}

printGreeting (yourname);