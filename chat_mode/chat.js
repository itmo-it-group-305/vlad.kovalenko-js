
function send(){ 
    
    var node=document.getElementById('comments');
    var child=document.createElement('div');
    child.setAttribute("class", 'comment');   
    node.appendChild(child); 
    if(document.getElementById('comment').value){
    child.innerHTML="<p>"+"<img src='face.gif'>"+"<a href='#'>Влад:</a>"+"<p>"+"<p>"+document.getElementById('comment').value+"</p>"; 
    var nod=document.getElementById('p');
    nod.setAttribute("class", 'hover');}
    return false;    
    
}