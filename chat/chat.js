function send(){   
var node=document.getElementById('comments');
var child=document.createElement('div');
child.setAttribute("class", 'comment');   
node.appendChild(child);
child.innerHTML="<h4>"+"<img src='face.gif'>"+"<a href='#'>Влад:</a>"+"</h4>"+"<p>"+document.getElementById('comment').value+"</p>"+"<br><br>";
return false;
}