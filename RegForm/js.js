var form={tag: 'form', child: [
    {tag: 'button', text: 'X', id: 'close', onclick: 'closeFunc()'},
    {tag: 'br'},
    {tag: 'label', text: 'Имя', for: 'name'},
    {tag: 'br'},
    {tag: 'input', type: 'text', placeholder: 'Вася', id: 'name'},
    {tag: 'br'},
    {tag: 'label', text: 'Телефон', for: 'phone'},
    {tag: 'br'},
    {tag: 'input', type: 'text', placeholder: '7(000)000-00-00', id: 'phone'},
    {tag: 'br'},
    {tag: 'label', text: 'Почта', for: 'mail'},
    {tag: 'br'},
    {tag: 'input', type: 'text', placeholder: 'lorem@mail.ru', id: 'mail'},
    {tag: 'br'},
    {tag: 'label', text: 'Дата', for: 'date'},
    {tag: 'br'},
    {tag: 'input', type: 'text', placeholder: '**.**.20**', id: 'date'},
    {tag: 'br'},
    {tag: 'button', text: 'Отмена', id: 'closed', onclick: 'closeFunc()'},
    {tag: 'div', text: 'Отправить', id: 'send', onclick: 'getFieldsForm()'},
]}

function builderHtml(obj){
    for(i in obj){
        if(i=='tag'){
            //проверка что не пустой
            elm=document.createElement(obj[i]);
        }
        if(i=='text'){
            elm.innerHTML=obj[i];
        }
        if(i=='type'||i=='id'||i=='for'||i=='onclick'||i=='placeholder'){
            elm.setAttribute(i, obj[i]);
        }
    }
    return elm;
}


function builderForm(obj){
    for(i in obj){
        if(i=='tag'){
            parent=document.createElement(obj[i]);
        }
        if(i=='child'){
            for(j in obj.child){
                parent.appendChild(builderHtml(obj.child[j]));
            }
        }
    }        
   return parent;
}
var d=0;
function openForm(){
    if(d==0){
    var obj=document.getElementById('form');
    obj.setAttribute('style', 'display: block');
        parent=document.getElementById('form');
       parent.appendChild(builderForm(form));
        d++;
     }
   
}


var Field=document.getElementsByTagName('form')

function checkEmptyField(Field){
    return Boolean(Field.value);
}

function getFieldsForm (){

    var field=['name', 'phone', 'mail', 'date'];
    for(var i in field){
        var obj=document.getElementById(field[i]);
       
        if(checkEmptyField(obj)){
            if(field[i]=='name'){
                obj.setAttribute('style', 'border-color: green');
            }
             // чек телефона
        if(field[i]=='phone'){
            if(checkPhone(obj.value)){
                obj.setAttribute('style', 'border-color: green');
            } else {
               obj.setAttribute('style', 'border-color: red');
            }
        }
           // конец чека телефона 
            //чек почты
            if(field[i]=='mail'){
            if(checkMail(obj.value)){
                obj.setAttribute('style', 'border-color: green');
            } else {
               obj.setAttribute('style', 'border-color: red');
            }
        }
            // конец чека почты
            //чек даты
              if(field[i]=='date'){
            if(checkDate(obj.value)){
                obj.setAttribute('style', 'border-color: green');
            } else {
               obj.setAttribute('style', 'border-color: red');
            }
        }
            //конец чека даты
        
        } else {
            
            obj.setAttribute('style', 'border-color: red');       
        }
    }
//return false;
}
function checkPhone(str){
    ptr = /\b7\(\d{3}\)\d{3}-\d{2}-\d{2}\b/;
    return ptr.test(str);
}
function checkMail(str){
   ptr = /\b[a-z]{1,10}@[a-z]{1,10}\.[a-z]{1,4}\b/;
    return ptr.test(str);
}
function checkDate(str){
    ptr = /\b[0-2][0-9]\.[0-2][0-9]\.20[0-9]{2}\b/;
    return ptr.test(str);
}

function closeFunc(){
    var obj=document.getElementById('form');
    obj.setAttribute('style', 'display: none');
   
}




