var city=['Санкт-Петербург', 'Новгород', 'Симферополь', 'Москва', 'Пермь'];
function buildOption(val,name){
    var node=document.createElement('option');
    node.setAttribute('value', val);
    node.innerHTML=name;
    return node;
}
parent=document.getElementById('city');
for(i in city){
    child=buildOption(i,city[i]);
    parent.appendChild(child);
}

elem=document.getElementById('add')

function addCity(e){
    e.preventDefault();
    e.stopPropagation();
    var newCity=document.getElementById('newCity').value;
    if(newCity){
    //city[city.length+1]=newCity;
    parent=document.getElementById('city');
    child=buildOption(city.length+1, newCity);
    parent.appendChild(child);}
    return false;
}
elem.addEventListener('click', addCity, false)