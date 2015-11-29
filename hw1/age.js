var age = window.prompt("Сколько вам лет?");
parseInt(age);
if(age>0&&age<12){
    alert('Ребенок');
}else if(age>0&&age<18){
    alert('Подросток');
} else if(age>0&&age<25){
    alert('Молодёжь');
} else if(age>0&&age<65){
    alert('среднего возраста');
} else if (age>0&&age<130){
    alert('Пенсионер');
} else{
    alert('Некорректно введен возраст');
};