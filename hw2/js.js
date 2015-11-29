var x = prompt();//задача 1
switch(x) {
    case "1":
        alert("Зима");
        break;
    case "2":
        alert("Зима");
        break;
    case "3":
        alert("Зима");
        break;
    case "4":
        alert("Весна");
        break;
    case "5":
        alert("Весна");
        break;
    case "6":
        alert("Весна");
        break;
    case "7":
        alert("Лето");
        break;
    case "8":
        alert("Лето");
        break;
    case "9":
        alert("Лето");
        break;
    case "10":
        alert("Осень");
        break;
    case "11":
        alert("Осень");
        break;
    case "12":
        alert("Осень");
        break;
    
}
//задача 2
var a=prompt("Введите a");
var b=prompt("Введите b");
var c=prompt("Введите c");
if(a==b) {
    alert("Равнобедренный");
} else if(b==c) {
    alert("Равнобедренный");
} else if(a==c) {
    alert("Равнобедренный");
} else {
    alert("Не Равнобедренный");
}
//задача 3
var num=prompt("Введите число");
if(num%2==0&&num<100&&num>10){
    alert("yes");
}else{
 alert("no");
}
//задача 4
var year="2015";
var str='';
for(var c=0;c<4; c++){
  for(var i=0; i<4; i++){
    str+=year[i];
    str+=' ';
  }}
alert(str);
//задача 5
var str="";
var h=prompt('Введите h');
for(var i=1;i<=h; i++){   
  for(var a=0;a<h-i;a++){
    str+=" ";
}
  for(var b=0;b<i;b++){
    str+="*";  
    if(b!=0){
        str+="*";
        if(b!=0){
        str+="*";
    }
    }
}
  for(var c=0;c<h-i;c++){
    str+=" ";    
}
  str+='\n';
  }
alert(str);
//задача 6 
//Значения переменных X, Y, Z поменять местами так, чтобы они оказались 
//упорядоченными по возрастанию. 

x = parseInt(prompt('Введите X', 0),10);
y = parseInt(prompt('Введите Y', 0),10);
z = parseInt(prompt('Введите Z', 0),10);
var sw=0;
if(x>=y||x>=z){
    if(y<=z){
        sw=x;
        x=y;
        y=sw;
        sw=0;
        sw=y;
        y=z;
        z=sw;
        sw=0;    
    } else {
        sw=x;
        x=z;
        z=sw;
        sw=0;
        sw=y;
        y=z;
        z=sw;
        sw=0;
    }

} 
if(y>=z){ 
    sw=y;
        y=z;
        z=sw;
        sw=0;
}

alert(x+' '+y+' '+z);





















